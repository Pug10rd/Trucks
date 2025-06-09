import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  width: 888px;
  height: 368px;
  border-radius: 20px;
  border: 1px solid var(--color-gray-light, #dadde1);
  background: white;
`;

export const ImageContainer = styled.div`
  flex: 0 0 292px;
  height: 320px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--color-text-primary, #101828);
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: var(--color-text-primary, #101828);

  svg {
    color: var(--color-rating, #ffc531);
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: var(--color-text-primary, #101828);
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary, #101828);
`;

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--color-text-secondary, #475467);

  &:hover {
    color: var(--color-accent, #e44848);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--color-text-secondary, #475467);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AmenitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

export const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: var(--color-gray-light-2, #f2f4f7);
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary, #101828);
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
`;

export const ShowMoreButton = styled.button`
  padding: 16px 40px;
  background: var(--color-accent, #e44848);
  color: white;
  border: none;
  border-radius: 200px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-accent-hover, #d73737);
  }
`;
