import Icon from "../../ui/Icon";
import { Container, IconWrapper, Input } from "./LocationInput.styled";

const LocationInput = ({ value, onLocationSelect }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="City"
        aria-label="City"
        value={value}
        onChange={(e) => onLocationSelect(e.target.value)}
      />
      <IconWrapper>
        <Icon name={"map"} />
      </IconWrapper>
    </Container>
  );
};

export default LocationInput;
