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

const options = [
  { value: "camper-van", label: "Van" },
  { value: "camper-fully-integrated", label: "Fully Integrated" },
  { value: "camper-alcove", label: "Alcove" },
];

const RadioFilter = ({ onFormChange, value = "" }) => {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  return (
    <Form>
      {options.map(({ value: formValue, label }) => {
        const iconKey = mapName(formValue);
        const checked = value === formValue;
        return (
          <Wrapper key={formValue}>
            <HiddenInput
              id={formValue}
              type="radio"
              value={formValue}
              name="formFilter"
              onChange={handleChange}
              checked={checked}
            />
            <Label htmlFor={formValue}>
              <CustomInput $checked={checked} $iconKey={iconKey}>
                <Icon name={`${iconKey}`} width={32} height={32} />
                <EquipmentText>{label}</EquipmentText>
              </CustomInput>
            </Label>
          </Wrapper>
        );
      })}
    </Form>
  );
};

export default RadioFilter;
