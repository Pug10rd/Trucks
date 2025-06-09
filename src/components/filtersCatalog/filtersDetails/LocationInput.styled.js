import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 18px;
  padding-left: 44px;
  width: 360px;
  height: 56px;
  line-height: 1.25;
  background: var(--color-lightGray);

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    line-height: 1.25;
    color: var(--color-blackTransp06);
  }
`;

export const IconWrapper = styled.svg`
  position: absolute;
  top: 18px;
  left: 18px;
  width: 18px;
  height: 20px;
  fill: var(--color-black);
`;
