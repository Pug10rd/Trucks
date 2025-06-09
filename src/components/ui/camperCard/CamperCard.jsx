import {
  Card,
  Content,
  Title,
  InfoRow,
  Image,
  Price,
  Location,
  ShowMoreButton,
  FavoriteButton,
  Description,
  Buttons,
  Rating,
  AmenitiesList,
  AmenityItem,
  ImageContainer,
  Header,
  PriceRow,
} from "./CamperCard.styled";
import Icon from "../Icon";
import { useNavigate } from "react-router-dom";

const AMENITIES_MAP = [
  { key: "AC", label: "AC", icon: "ac" },
  { key: "kitchen", label: "Kitchen", icon: "kitchen" },
  { key: "TV", label: "TV", icon: "tv" },
  { key: "bathroom", label: "Bathroom", icon: "bathroom" },
  { key: "microwave", label: "Microwave", icon: "microwave" },
  { key: "radio", label: "Radio", icon: "radio" },
  { key: "engine", label: "Engine", icon: "fuel" },
  { key: "transmission", label: "Transmission", icon: "gear" },
  { key: "refrigerator", label: "Refrigerator", icon: "fridge" },
  { key: "gas", label: "Gas", icon: "gas" },
  { key: "water", label: "Water", icon: "water" },
  // Add more amenities and their correct icon names from sprite.svg as needed
];

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();
  const {
    name,
    price,
    location,
    gallery,
    description,
    rating,
    reviews,
    AC,
    transmission,
    engine,
    kitchen,
    TV,
    bathroom,
    microwave,
    radio,
    refrigerator,
    gas,
    water,
  } = camper;

  const getAmenities = () => {
    const features = {
      AC,
      kitchen,
      TV,
      bathroom,
      microwave,
      radio,
      engine,
      transmission,
      refrigerator,
      gas,
      water,
    };
    const amenities = [];
    for (const { key, label, icon } of AMENITIES_MAP) {
      if (features[key]) {
        let displayLabel = label;
        if (key === "engine" && typeof engine === "string") {
          displayLabel = engine.charAt(0).toUpperCase() + engine.slice(1);
        }
        if (key === "transmission" && typeof transmission === "string") {
          displayLabel =
            transmission.charAt(0).toUpperCase() + transmission.slice(1);
        }
        amenities.push({ key, label: displayLabel, icon });
      }
      if (amenities.length === 5) break;
    }
    return amenities;
  };

  const amenities = getAmenities();

  return (
    <Card>
      <ImageContainer>
        {gallery?.[0]?.thumb && (
          <Image src={camper.gallery[0].thumb} alt={camper.name} />
        )}
      </ImageContainer>

      <Content>
        <Header>
          <div>
            <Title>{name}</Title>
            <InfoRow>
              <Rating>
                <Icon
                  name="star"
                  width={16}
                  height={16}
                  fill={"var(--color-yellow)"}
                />
                {rating}({reviews?.length || 0} Reviews)
              </Rating>
              <Location>
                <Icon name="map" width={16} height={16} />
                {location}
              </Location>
            </InfoRow>
          </div>
          <PriceRow>
            <Price>€{price?.toLocaleString("en-US")}.00</Price>
            <FavoriteButton>
              <Icon name="heart" width={26} height={24} />
            </FavoriteButton>
          </PriceRow>
        </Header>

        <Description>{description}</Description>

        <AmenitiesList>
          {amenities.map((amenity) => (
            <AmenityItem key={amenity.key}>
              <Icon name={amenity.icon} width={20} height={20} />
              {amenity.label}
            </AmenityItem>
          ))}
        </AmenitiesList>

        <Buttons>
          <ShowMoreButton onClick={() => navigate(`/catalog/${camper.id}`)}>
            Show more
          </ShowMoreButton>
        </Buttons>
      </Content>
    </Card>
  );
};

export default CamperCard;
