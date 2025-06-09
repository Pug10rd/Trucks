import styled from "styled-components";
import { Link } from "react-router-dom";
import img1x from "../../assets/images/home-01@1x.jpg";
import img2x from "../../assets/images/home-01@2x.jpg";

export const Section = styled.section`
  width: 100%;
  padding: 260px 0;
  margin: 0 auto;
  background-color: var(--color-gray);
  background-image: image-set(url(${img1x}) 1x, url(${img2x}) 2x);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
  padding: 0 64px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 600;
  color: var(--color-lightGray);
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 0.66;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  line-height: 1.33;
`;

export const StyledButton = styled(Link)`
  display: flex;
  width: 173px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 200px;
  color: var(--color-white);
  background-color: var(--color-orange);

  &:hover {
    background-color: var(--color-orangeDark);
  }
`;
