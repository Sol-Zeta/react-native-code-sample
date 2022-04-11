import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MainNavigationParams } from "../navigation/Main";
import { SubscreenHeader } from "../components/SubscreenHeader";
import image from "../data/countDown";
import { DATA } from "../data/information";
import { duoData } from "../data/duoData";
import { styles } from "../styles/screens/information";

export const Information = ({
  navigation,
}: StackScreenProps<MainNavigationParams, "letter">) => {
  const [selected, setSelected] = useState({
    id: "",
    title: "",
    logo: "",
    description: "",
  });
  const [isDetail, setIsDetail] = useState(false);

  const handleOnPress = () => navigation.navigate("tabNavigation");

  const handleSelect = (item: any) => {
    setSelected(item);
    setIsDetail(true);
  };

  const handleCloseDetail = () => {
    setSelected({
      id: "",
      title: "",
      logo: "",
      description: "",
    });
    setIsDetail(false);
  };

  const renderItems = () => {
    return DATA.map((e: any, i: number) => (
      <TouchableOpacity
        onPress={() => handleSelect(e)}
        style={styles.itemContainer}
        key={`help-${i}`}
      >
        <View style={styles.logoContainer}>
          <Image source={e.logo} style={styles.logo} />
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 0,
            width: "100%",
            height: "25%",
          }}
        >
          <Image
            source={image.snow}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
          />
        </View>
        {!isDetail ? (
          <>
            <SubscreenHeader
              title="Información"
              onPress={handleOnPress}
              style={styles.header}
            />
            <ScrollView style={styles.scrollView}>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleSelect(duoData)}
                key={"help-0"}
              >
                <View style={styles.logoContainer}>
                  <Image source={duoData.logo} style={styles.logo} />
                </View>
              </TouchableOpacity>
              {renderItems()}
            </ScrollView>
          </>
        ) : (
          <View style={{ flex: 1 }}>
            <SubscreenHeader
              image={selected.logo}
              onPress={handleCloseDetail}
              style={styles.header}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{selected.title}</Text>
              <Text style={styles.text}>{selected.description}</Text>
            </View>
          </View>
        )}
      </View>
    </>
  );
};
