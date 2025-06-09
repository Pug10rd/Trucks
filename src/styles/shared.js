import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: ${(props) => props.width || "auto"};
  padding: 16px 16px;
  border-radius: 200px;
  height: 56px;

  font-weight: 500;
  letter-spacing: -0.01em;
  transition: border-color var(--transition);

  ${(props) =>
    props.$variant === "transparent" &&
    `
    border: 1px solid var(--color-grayTransp);
    background: transparent;
  `}

  ${(props) =>
    props.$variant === "orange" &&
    `
    color: var(--color-white);
    background-color: var(--color-orange);
    border: none;
    
    &:hover,
    &:focus {
      background-color: var(--color-orangeDark);
    }
  `}

  &:hover,
  &:focus {
    ${(props) =>
      props.$variant === "transparent" &&
      `
      border-color: var(--color-orangeDark);
    `}
  }
`;
