import styled, { css } from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  font-family: "Roboto-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  user-select: none;
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Label = styled.label`
  user-select: none;
`;

export const CustomInput = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 96px;

  border: 1px solid var(--color-blackTransp02);
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  transition: border-color var(--transition);

  ${({ $checked }) =>
    $checked &&
    css`
      border-color: var(--color-orange);
    `}
`;

export const EquipmentText = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--color-black);
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
`;
