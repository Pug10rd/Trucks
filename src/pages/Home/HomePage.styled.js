import styled from "styled-components";
import { Link } from "react-router-dom";
import img1x from "../../assets/images/home-01@1x.jpg";
import img2x from "../../assets/images/home-01@2x.jpg";

export const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 260px 0;
  background-color: var(--color-gray);
  background-image: image-set(url(${img1x}) 1x, url(${img2x}) 2x);
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0 64px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 600;
  color: var(--color-white);
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
  background-color: #e44848;
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d84343;
  }
`;
