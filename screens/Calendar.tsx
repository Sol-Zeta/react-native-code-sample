import React, { useState, useEffect, useContext } from "react";
import { Alert, Dimensions, View, Image, Text } from "react-native";
import * as MediaLibrary from "expo-media-library";
import CalendarButtons from "../components/CalendarButtons";
import { Modal } from "../components/Modal";
import { WithText } from "../components/Buttons";
import ShareGift from "../components/ShareGift";
import { Permission } from "./";
import { styles } from "../styles/screens/calendar";
import BottomSheetContext from "../context/BottomSheetContext";
import { calendarImages, giftNames } from "../data/calendar";
import image from "../data/modalImage";
import { DATA } from "./../data/onboarding";
import { downloadGift } from "../hooks/utils/cameraUtils";

export const Calendar = ({ navigation: { navigate } }: any) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [availableModal, setAvailableModal] = useState(false);
  const [notAvailableModal, setNotAvailableModal] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<
    boolean | null
  >(null);
  const [giftNumber, setGiftNumber] = useState(0);
  const [giftToShare, setGiftToShare] = useState<any>(null);
  const [giftUrl, setGiftUrl] = useState("");
  const [openShare, setOpenShare] = useState(false);

  const { getIsOpen } = useContext(BottomSheetContext);

  useEffect(() => {
    setCurrentMonth(currentTime.getMonth() + 1);
    setCurrentDay(currentTime.getDate());

    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        setHasMediaLibraryPermission(true);
      } else {
        setHasMediaLibraryPermission(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (openShare) {
      getIsOpen(true);
    } else {
      getIsOpen(false);
    }
  }, [openShare]);

  const isGiftAvailable = (date: number) => {
    if (currentMonth === 12 && date <= currentDay) {
      setAvailableModal(true);
      setGiftNumber(date);
    } else {
      setNotAvailableModal(true);
      setGiftNumber(0);
    }
  };

  const handleClickAvailable = async () => {
    setAvailableModal(false);
    try {
      if (giftNumber !== 0) {
        await downloadGift(
          giftNames[giftNumber - 1],
          hasMediaLibraryPermission
        );
        setGiftToShare(calendarImages[giftNumber - 1]);
        setGiftUrl(giftNames[giftNumber - 1]);
        setOpenShare(true);
      }
    } catch (error) {
      Alert.alert("Lo siento, no he podido descargar tu regalo.");
    }
  };

  const handleClickNotAvailable = () => setNotAvailableModal(false);
  const handleClose = () => navigate("map");

  if (hasMediaLibraryPermission === false) {
    return (
      <Permission
        text={
          "Para poder guardar los dibujos y juegos descargables en tu dispositivo es necesario que des permiso a la aplicación para acceder a la galería de imágenes."
        }
        handleClose={handleClose}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.redBackground}>
          <Text style={styles.title}>Calendario Navideño</Text>
          <Text style={styles.text}>
            Descarga un dibujo o recortable navideño cada día para imprimir o
            pintar
          </Text>
        </View>
        <Image source={DATA.background} style={styles.backgroundImage} />
        <View style={styles.buttonContainer}>
          <CalendarButtons
            currentMonth={currentMonth}
            currentDay={currentDay}
            pressAction={isGiftAvailable}
          />
        </View>
        {availableModal && (
          <Modal
            title="Imagen disponible"
            image={image.calendarAvailable}
            firstText="Diviértete con nuestro Calendario Navideño"
            secondText="Descarga los dibujos y recortables de Joy to the World 2021"
            thirdText="El mejor entretenimiento infantil de estas navidades"
            toggleModal={() => setAvailableModal(false)}
          >
            <WithText
              text="Descargar ahora"
              onPress={handleClickAvailable}
              color="green"
              style={{ width: "100%" }}
            />
          </Modal>
        )}
        {notAvailableModal && (
          <Modal
            title="Imagen no disponible"
            image={image.calendarNotAvailable}
            firstText="Cada día de diciembre se activan nuevas descargas para poder disfrutar en familia estas navidades"
            secondText="Vuelve el día correspondiente para descargar esta imagen"
            toggleModal={() => setNotAvailableModal(false)}
          >
            <WithText
              text="Volver al calendario"
              onPress={handleClickNotAvailable}
              color="red"
              style={{ width: "100%" }}
            />
          </Modal>
        )}
        {openShare ? (
          <ShareGift
            gift={giftToShare}
            giftUrl={giftUrl}
            toggleModal={() => setOpenShare(false)}
          />
        ) : (
          <View></View>
        )}
      </View>
    );
  }
};
