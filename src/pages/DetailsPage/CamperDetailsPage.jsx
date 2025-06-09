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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/campersThunks";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Gallery from "../../components/ui/camperDetails/Gallery";
import CampervanDetails from "./CampervanDetails"; // Add this import
import Icon from "../../components/ui/Icon";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentCamper, isLoading, error } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading camper details...</p>;
  if (error) return <p>Error loading camper: {error}</p>;
  if (!currentCamper) return <p>Camper not found</p>;

  return (
    <Wrapper>
      <Header>
        <Title>{currentCamper.name}</Title>
        <ReviewInfo>
          <Rating>
            <Icon name={"star"} fill={"var(--color-yellow)"} />
            {currentCamper.rating}({currentCamper.reviews?.length || 0} Reviews)
          </Rating>
          <Location>
            <Icon name={"map"} />
            {currentCamper.location}
          </Location>
        </ReviewInfo>
        <Price>€{currentCamper.price}.00</Price>
      </Header>

      <Gallery gallery={currentCamper.gallery} />
      <Description>{currentCamper.description}</Description>
      <CampervanDetails camper={currentCamper} />
    </Wrapper>
  );
};

export default CamperDetailsPage;

const Wrapper = styled.div`
  padding: 24px;
  max-width: 1312px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #101828;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  color: #101828;
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #101828;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #101828;
  margin-bottom: 28px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #475467;
  margin-bottom: 60px;
`;
