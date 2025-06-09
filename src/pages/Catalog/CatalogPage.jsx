import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersThunks";
import CamperCatalogCards from "../../components/camperCatalogCards/CamperCatalogCards";
import { CatalogContainer } from "./CatalogPage.styled";
import FiltersCatalog from "../../components/filtersCatalog/FiltersCatalog";

const ITEMS_PER_PAGE = 4;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allItems, setAllItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);

  const { items, isLoading, error } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    setPage(1);
    setAllItems([]);
    setHasMore(true);
    setResetTrigger((prev) => prev + 1);
  }, [filters]);

  useEffect(() => {
    dispatch(fetchCampers({ ...filters, page, limit: ITEMS_PER_PAGE }));
  }, [dispatch, page, resetTrigger, filters]);

  useEffect(() => {
    if (!items) return;

    if (page === 1) {
      setAllItems(items);
    } else {
      setAllItems((prev) => {
        const prevIds = new Set(prev.map((item) => item.id));
        const newItems = items.filter((item) => !prevIds.has(item.id));
        return [...prev, ...newItems];
      });
    }

    setHasMore(items.length === ITEMS_PER_PAGE);
  }, [items, page]);

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <CatalogContainer>
      <FiltersCatalog />
      <CamperCatalogCards
        isLoading={isLoading}
        handleLoadMore={handleLoadMore}
        error={error}
        items={allItems}
        hasMore={hasMore}
      />
    </CatalogContainer>
  );
};

export default CatalogPage;
