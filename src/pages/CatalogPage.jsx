import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/campersThunks";
import CamperCard from "../components/CamperCard";
import styled from "styled-components";
import { Section, Title, Button } from "../styles/shared";

const ITEMS_PER_PAGE = 4;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const { items, isLoading, error } = useSelector((state) => state?.campers);
  console.log(items);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  useEffect(() => {
    if (items?.length === 0) {
      console.log("fetching now");

      dispatch(fetchCampers());
    }
  }, [dispatch, items]);

  return (
    <Section>
      <Title>Available Campers</Title>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <CardGrid>
            {items?.items?.slice(0, visibleCount)?.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </CardGrid>

          {visibleCount < items?.length && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </>
      )}
    </Section>
  );
};

export default CatalogPage;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
