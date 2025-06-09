import styled from "styled-components";

export const ReviewsSection = styled.section`
  margin-top: 32px;
  padding: 32px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.04);
  width: 100%;
`;

export const ReviewsTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border-radius: 16px;
  background: #f7f7f7;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ReviewerName = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const ReviewDate = styled.span`
  font-size: 14px;
  color: #475467;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: #ffc531;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  color: #101828;
  margin: 0;
`;
