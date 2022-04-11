import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import { ZoomableContainer } from "../components/ZoomableContainer";
import { styles } from "../styles/screens/homeMap";
import { StandInfo } from "../components/StandInfo";
import { CategoryButtons } from "../components/CategoryButtons";
import { useCategoryFilter } from "../hooks/useCategoryFilter";
import { useStandInfo } from "../hooks/useStandInfo";
import { useFavourites } from "../hooks/useFavourites";
import { CloseModal, Favorite } from "../components/Buttons";
import BottomSheetContext from "../context/BottomSheetContext";

export const HomeMap = () => {
  const [background, setBackground] = useState<any>("");
  const [currentId, setCurrentId] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [isFav, setIsFav] = useState(false);

  const { addFavID, isFavID, removeFavID, getFavsID } = useFavourites();
  const {
    selectedCategory,
    handleCategoryFilter,
    handleFavouriteFilter,
    handleNoCategoryFilter,
  } = useCategoryFilter({ getFavsID });

  const { getIsOpen } = useContext(BottomSheetContext);

  useEffect(() => {}, [getFavsID()]);

  const { selected, setSelected, getSelectedStand, getRelatedStads } =
    useStandInfo();

  const handleCloseStandInfo = () => {
    getIsOpen(false);
    setSelected("");
  };

  useEffect(() => {
    if (selected) {
      const item = getSelectedStand();
      setBackground(item.backgroundPicture);
      setCurrentId(item.id);
      isFavID(item.id) ? setIsFav(true) : setIsFav(false);
    }
  }, [selected]);

  const handleFav = () => {
    const id = currentId || "";
    isFavID(id) ? removeFavID(id) : addFavID(id);
    setIsFav(!isFav);
  };

  const getCategory = (value: string) => setCurrentCategory(value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAPA DEL PUEBLO</Text>
      <CategoryButtons
        handleCategoryFilter={handleCategoryFilter}
        handleFavouriteFilter={handleFavouriteFilter}
        handleNoCategoryFilter={handleNoCategoryFilter}
        getCurrentCategory={getCategory}
      />
      <ZoomableContainer
        selectedCategory={selectedCategory}
        selected={selected}
        setSelected={setSelected}
        currentCategory={currentCategory}
      />
      {selected !== "" && (
        <>
          <View
            style={{
              width: "100%",
              height: 150,
              position: "absolute",
              zIndex: 999,
              top: 0,
              left: 0,
            }}
          >
            <CloseModal onPress={handleCloseStandInfo} light={true} />
            <Favorite onPress={handleFav} fav={isFav} />
          </View>
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              zIndex: 0,
            }}
          >
            {background ? (
              <ImageBackground
                source={background}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></ImageBackground>
            ) : null}
          </View>
        </>
      )}
      <StandInfo
        data={getSelectedStand()}
        related={getRelatedStads()}
        selected={selected}
        setSelected={setSelected}
        addFavID={addFavID}
        isFavID={isFavID}
        removeFavID={removeFavID}
      />
    </View>
  );
};
