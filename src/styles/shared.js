import styled from "styled-components";

export const Section = styled.section`
  padding: 32px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
`;

export const Button = styled.button`
  display: block;
  margin: 24px auto 0;
  padding: 12px 24px;
  background-color: #3470ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2659d8;
  }
`;
