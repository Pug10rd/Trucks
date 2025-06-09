import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 44px;
  border-bottom: 1px solid #dadde1;
`;

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #101828;
  padding: 0 0 24px 0;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$active &&
    `
    border-bottom: 5px solid var(--color-orange);
    margin-bottom: -1px;
  `}

  &:hover {
    color: var(--color-orange);
  }
`;

export const TabContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 631px;
  gap: 40px;
  align-items: start;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary, #101828);
`;

export const VehicleDetailsSection = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 44px;
  height: 590px;
`;

export const VehicleDetailsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  padding-bottom: 24px;
  margin: 0 0 24px 0;
  border-bottom: 1px solid var(--color-gray);
`;

export const DetailsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #101828;
`;

export const DetailValue = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #101828;
`;

export const BookingSection = styled.div`
  border: 1px solid #dadde1;
  border-radius: 10px;
  padding: 44px;
  align-self: start;
  height: 590px;
`;

export const BookingTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #101828;
  margin: 0 0 8px 0;
`;

export const BookingSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #475467;
  margin: 0 0 24px 0;
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #101828;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 18px;
  border: 1px solid #dadde1;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #101828;
  background: #fff;

  &::placeholder {
    color: #6c727f;
  }

  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }
`;

export const TextArea = styled.textarea`
  padding: 18px;
  border: 1px solid #dadde1;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #101828;
  background: #fff;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: #6c727f;
  }

  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }
`;

export const SubmitButton = styled.button`
  background: var(--color-orange);
  color: #fff;
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  margin-top: 10px;
  align-self: center;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }
`;
