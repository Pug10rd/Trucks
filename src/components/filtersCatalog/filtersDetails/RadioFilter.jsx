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
        // Use formValue directly for icon name if mapName returns undefined
        const iconKey = mapName(formValue);
        console.log("iconKey", iconKey);
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
