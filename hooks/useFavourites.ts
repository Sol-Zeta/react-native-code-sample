import { useEffect, useState } from "react";
import { getFavouritesFB, setFavouritesFB } from "./useFirebaseAuth";

export const useFavourites = () => {
  const [favs, setFavs] = useState<string[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getFavouritesFB()
      .then((favs) => setFavs(favs))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    !Loading && setFavouritesFB(favs);
  }, [favs]);

  const removeFavID = (id: string) => {
    setFavs(favs.filter((ItemId) => ItemId !== id));
  };
  const addFavID = (id: string) => {
    !favs.includes(id) && setFavs([...favs, id]);
  };

  const getFavsID = () => favs;

  const isFavID = (id: string) => favs.includes(id);

  return { removeFavID, addFavID, getFavsID, isFavID };
};
