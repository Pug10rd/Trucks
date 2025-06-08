import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../redux/campers/campersThunks";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Gallery from "../components/ui/camperDetails/Gallery";

const CamperDetailsPage = () => {
  const { id } = useParams(); // <=== Ось цього не вистачає
  const dispatch = useDispatch();

  const { currentCamper, isLoading, error } = useSelector(
    (state) => state.campers
  );

  // const {
  //   id,
  //   name,
  //   price,
  //   rating,
  //   reviews,
  //   location,
  //   description,
  //   transmission,
  //   engine,
  //   gallery,
  //   AC,
  //   bathroom,
  //   kitchen,
  //   radio,
  //   refrigerator,
  //   microwave,
  //   gas,
  //   water,
  // } = camper;

  useEffect(() => {
    dispatch(fetchCamperById(id)); // <=== Подаємо ID з URL
  }, [dispatch, id]);

  if (isLoading) return <p>Loading camper details...</p>;
  if (error) return <p>Error loading camper: {error}</p>;
  if (!currentCamper) return <p>Camper not found</p>;

  return (
    <Wrapper>
      <Title>{currentCamper.name}</Title>
      <p>{currentCamper.items}</p>
      <Gallery gallery={currentCamper.gallery} />
      <Description>{currentCamper.description}</Description>
    </Wrapper>
  );
};

export default CamperDetailsPage;

// Styled Components
const Wrapper = styled.div`
  padding: 24px;
  max-width: 1312px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;
