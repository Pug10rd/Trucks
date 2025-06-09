import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../components/ui/camperCard/CamperCard";
import {
  CardGrid,
  CatalogSection,
} from "../components/camperCatalogCards/CamperCatalogCards.styled";
import { useEffect, useState } from "react";
import { fetchCampers } from "../redux/campers/campersThunks";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.favoriteItems);
  const allCampers = useSelector((state) => state.campers.items);
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    if (allCampers.length === 0) {
      dispatch(fetchCampers({ page: 1, limit: 100 })); // або фетч без пагінації, якщо можна
    }
  }, [allCampers.length, dispatch]);

  useEffect(() => {
    let favs = allCampers.filter((camper) => favoriteIds.includes(camper.id));
    if (favs.length < favoriteIds.length) {
      const stored = localStorage.getItem("favoriteCampers");
      if (stored) {
        const parsed = JSON.parse(stored);
        favs = [
          ...favs,
          ...parsed.filter(
            (c) =>
              favoriteIds.includes(c.id) && !favs.some((f) => f.id === c.id)
          ),
        ];
      }
    }
    setFavoriteCampers(favs);
  }, [favoriteIds, allCampers]);

  useEffect(() => {
    if (favoriteCampers.length > 0) {
      localStorage.setItem("favoriteCampers", JSON.stringify(favoriteCampers));
    } else {
      localStorage.removeItem("favoriteCampers");
    }
  }, [favoriteCampers]);

  return (
    <CatalogSection>
      <h2>Favorites</h2>
      <CardGrid>
        {favoriteCampers.length === 0 ? (
          <p>No favorite campers yet.</p>
        ) : (
          favoriteCampers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        )}
      </CardGrid>
    </CatalogSection>
  );
};

export default FavoritesPage;
