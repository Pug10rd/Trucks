import { mapName } from "../../../utils/mapping";
import Icon from "../../ui/Icon";
import {
  CustomInput,
  EquipmentText,
  Form,
  HiddenInput,
  Label,
  Wrapper,
} from "./CheckboxFilter.styled";

const equipmentOptions = [
  { label: "AC", value: "AC" },
  { label: "Automatic", value: "transmission" },
  { label: "Kitchen", value: "kitchen" },
  { label: "TV", value: "TV" },
  { label: "Bathroom", value: "bathroom" },
];

const CheckboxFilter = ({ value = [], onEquipmentChange }) => {
  const handleChange = (optionValue) => {
    if (value.includes(optionValue)) {
      onEquipmentChange(value.filter((v) => v !== optionValue));
    } else {
      onEquipmentChange([...value, optionValue]);
    }
  };

  return (
    <Form>
      {equipmentOptions.map((equipment) => {
        const iconKey = mapName(equipment.value);
        const checked = value.includes(equipment.value);

        return (
          <Wrapper key={equipment.value}>
            <HiddenInput
              type="checkbox"
              id={equipment.value}
              checked={checked}
              onChange={() => handleChange(equipment.value)}
            />
            <Label htmlFor={equipment.value}>
              <CustomInput $checked={checked} $iconKey={iconKey}>
                <Icon name={iconKey} width={32} height={32} />

                <EquipmentText>{equipment.label}</EquipmentText>
              </CustomInput>
            </Label>
          </Wrapper>
        );
      })}
    </Form>
  );
};

export default CheckboxFilter;
