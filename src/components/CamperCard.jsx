import styled from "styled-components";
import Icon from "./ui/Icon";

const CamperCard = ({ camper }) => {
  const { name, price, location, gallery, description } = camper;

  return (
    <Card>
      {gallery?.[0]?.thumb && (
        <Image src={camper.gallery[0].thumb} alt={camper.name} />
      )}
      <Content>
        <Title>{name}</Title>
        <InfoRow>
          <Price>€{price?.toLocaleString("en-US")},00</Price>
          <Location>
            <Icon name={"map"} size={16} />
            {location}
          </Location>
        </InfoRow>
        <Description>{description}</Description>
        <Buttons>
          <ShowMoreButton
            onClick={() => window.open(`/catalog/${camper.id}`, "_blank")}
          >
            Show more
          </ShowMoreButton>
          <FavoriteButton>♡</FavoriteButton>
        </Buttons>
      </Content>
    </Card>
  );
};

export default CamperCard;

const Card = styled.div`
  display: flex;
  gap: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Location = styled.span``;

const Description = styled.p`
  margin: 8px 0;
  color: #666;
`;

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

const ShowMoreButton = styled.button`
  background-color: #3470ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
