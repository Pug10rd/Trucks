import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../../styles/shared";
import CheckboxFilter from "./CheckboxFilter";
import LocationInput from "./LocationInput";
import RadioFilter from "./RadioFilter";

import { setFilters, resetFilters } from "../../../redux/filters/filtersSlice";
import { fetchCampers } from "../../../redux/campers/campersThunks";

import {
  Container,
  FiltersWrapper,
  LocationWrapper,
  FiltersBox,
  EquipmentWrapper,
  FilterTitle,
  ButtonsWrapper,
  FilterBox,
} from "../FiltersCatalog.styled";

const FiltersCatalog = () => {
  const dispatch = useDispatch();
  const filtersInStore = useSelector((state) => state.filters);

  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState([]);
  const [form, setForm] = useState("");

  useEffect(() => {
    setLocation(filtersInStore.location || "");
    setEquipment(filtersInStore.equipment || []);
    setForm(filtersInStore.form || "");
  }, [filtersInStore]);

  const isFormEmpty =
    !location.trim() && equipment.length === 0 && !form.trim();

  const handleSearch = () => {
    const filters = {
      location: location.trim(),
      equipment,
      form,
    };
    dispatch(setFilters(filters));
    dispatch(fetchCampers(filters));
  };

  const handleClear = () => {
    if (isFormEmpty) return;
    setLocation("");
    setEquipment([]);
    setForm("");
    dispatch(resetFilters());
  };

  return (
    <Container>
      <FiltersWrapper>
        <FilterBox>
          <LocationWrapper>
            <h3>Location</h3>
            <LocationInput value={location} onLocationSelect={setLocation} />
          </LocationWrapper>

          <FiltersBox>
            <EquipmentWrapper>
              <h3>Filters</h3>
              <div>
                <FilterTitle>
                  <h4>Vehicle equipment</h4>
                </FilterTitle>
                <CheckboxFilter
                  value={equipment}
                  onEquipmentChange={setEquipment}
                />
              </div>
            </EquipmentWrapper>

            <div>
              <FilterTitle>
                <h4>Vehicle type</h4>
              </FilterTitle>
              <RadioFilter value={form} onFormChange={setForm} />
            </div>
          </FiltersBox>
        </FilterBox>

        <ButtonsWrapper
          style={{
            position: "sticky",
            bottom: 0,
            background: "#fff",
            paddingTop: 24,
          }}
        >
          <Button $variant="orange" width="166px" onClick={handleSearch}>
            Search
          </Button>
          <Button $variant="transparent" width="145px" onClick={handleClear}>
            Clear
          </Button>
        </ButtonsWrapper>
      </FiltersWrapper>
    </Container>
  );
};

export default FiltersCatalog;
