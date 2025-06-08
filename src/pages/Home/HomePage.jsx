import {
  Section,
  Container,
  TextBox,
  Title,
  Subtitle,
  StyledButton,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <Title>Campers of your dreams</Title>
          <Subtitle>You can find everything you want in our catalog</Subtitle>
        </TextBox>
        <StyledButton to="/catalog">View Now</StyledButton>
      </Container>
    </Section>
  );
};

export default HomePage;
