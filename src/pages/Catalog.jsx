import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard";
import styled from "styled-components";
import { Section, Title, Button } from "../styles/shared";

const ITEMS_PER_PAGE = 4;

const Catalog = () => {
  const dispatch = useDispatch();
  const { campers, isLoading, error } = useSelector((state) => state.campers);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <Section>
      <Title>Available Campers</Title>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <CardGrid>
            {campers?.items?.slice(0, visibleCount)?.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </CardGrid>

          {visibleCount < campers?.length && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </>
      )}
    </Section>
  );
};

export default Catalog;

// const Wrapper = styled.div`
//   padding: 32px;
// `;

// const Title = styled.h1`
//   margin-bottom: 24px;
// `;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// const LoadMoreButton = styled.button`
//   margin: 24px auto 0;
//   display: block;
//   padding: 12px 24px;
//   background-color: #3470ff;
//   color: white;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #2659d8;
//   }
// `;
