import { Title, Button } from "../../styles/shared";
import CamperCard from "../ui/camperCard/CamperCard";
import { CardGrid, CatalogSection } from "./CamperCatalogCards.styled";
import { useRef } from "react";

const CamperCatalogCards = ({
  isLoading,
  error,
  items,
  hasMore,
  handleLoadMore,
}) => {
  const loadMoreRef = useRef(null);

  const handleLoadMoreClick = (e) => {
    e.preventDefault();
    handleLoadMore();
    setTimeout(() => {
      loadMoreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  };

  return (
    <CatalogSection>
      {error && <p>{error}</p>}
      <CardGrid>
        {items?.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </CardGrid>
      {isLoading && (
        <div style={{ textAlign: "center", margin: "24px 0" }}>
          <span>Loading...</span>
        </div>
      )}
      {hasMore && !isLoading && (
        <div
          ref={loadMoreRef}
          style={{ textAlign: "center", margin: "24px 0" }}
        >
          <Button
            $variant="transparent"
            width="145px"
            onClick={handleLoadMoreClick}
          >
            Load More
          </Button>
        </div>
      )}
    </CatalogSection>
  );
};

export default CamperCatalogCards;
