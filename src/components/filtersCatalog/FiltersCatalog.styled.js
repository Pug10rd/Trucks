import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-height: calc(100vh - 250px);

  position: -webkit-sticky;
  position: sticky;
  top: 114px;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 372px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar);
    border-radius: 7px;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: var(--color-blackTransp06);
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const EquipmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;

  h3 {
    font-weight: 500;
    color: var(--color-gray);
  }
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 360px;
  overflow-y: auto;
  max-height: calc(90vh - 180px);
`;

export const FilterTitle = styled.div`
  height: 48px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--color-filterLine);

  h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const VehicleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 360px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
`;
