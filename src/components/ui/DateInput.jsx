import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useField } from "formik";
import { DayPicker, defaultLocale } from "react-day-picker";
import { format, isBefore, startOfDay } from "date-fns";
import styled from "styled-components";

const FieldWrapper = styled.div`
  position: relative;
`;

const FieldStyled = styled.input`
  width: 100%;
  height: 60px;
  padding: 18px;
  background: var(--color-lightGray);
  border: 1px solid transparent;
  border-radius: 10px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  transition: border-color var(--transition);

  &:hover,
  &:focus {
    border-color: var(--color-orange);
  }

  &:focus-visible {
    border-color: var(--color-blackTransp04);
    outline: none;
  }
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 125%;
  z-index: 100;
`;

const StyledDayPicker = styled(DayPicker)`
  border: 1px solid var(--color-gray);
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 12px;
  width: 276px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid var(--color-gray);
    z-index: 101;
  }

  &::after {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 12px solid var(--color-white);
    z-index: 102;
  }

  .rdp-months {
    max-width: 100%;
  }

  .rdp-month_caption {
    justify-content: center;
    margin: 0 24px 12px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: large;
  }

  .rdp-button_previous,
  .rdp-button_next {
    position: absolute;
    top: 12px;
    width: 24px;
    height: 24px;
    display: inline-flex;
  }

  .rdp-button_previous {
    inset-inline-start: 12px;
  }

  .rdp-button_next {
    inset-inline-end: 12px;
  }

  .rdp-chevron {
    fill: var(--color-gray);
  }

  .rdp-caption_label {
    color: var(--color-black);
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
  }

  .rdp-month_grid {
    width: 252px;
    border-collapse: collapse;

    thead {
      position: relative;
      height: 38px;

      &::after {
        content: "";
        position: absolute;
        top: 26px;
        left: -13px;
        right: 0;
        width: 276px;
        height: 1px;
        background-color: var(--color-gray);
        z-index: 102;
      }
    }
  }

  .rdp-weekdays {
    display: flex;
    justify-content: space-between;
    width: 252px;
  }

  .rdp-weekday {
    width: 36px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-gray);
  }

  .rdp-weeks {
    width: 252px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 4px;
  }

  .rdp-week {
    display: table-row;
    height: 32px;
  }

  .rdp-day {
    width: 36px;
    height: 32px !important;
    border-radius: 32px;
    font-size: 14px;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--color-orange);
    }
  }

  .rdp-outside {
    opacity: 0.65;
  }

  .rdp-day_button {
    width: 100%;
    height: 32px !important;
  }

  .rdp-today {
    background-color: var(--color-lightBlue);
    color: inherit;
  }

  .rdp-selected {
    background-color: var(--color-gray);
    color: white !important;
  }
`;

const ErrorStyled = styled.div`
  position: absolute;
  bottom: -16px;
  left: 18px;
  color: var(--color-orange);
  font-size: 12px;
`;

const customLocale = {
  ...defaultLocale,
  localize: {
    ...defaultLocale.localize,
    day: (n) => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][n],
  },
  options: {
    ...defaultLocale.options,
    weekStartsOn: 1,
  },
};

const DateInput = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const today = useMemo(() => startOfDay(new Date()), []);

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleSelect = (date) => {
    if (!date) return;
    const selected = startOfDay(date);
    helpers.setTouched(true);
    if (isBefore(selected, today)) {
      helpers.setError("Select a date starting from today");
      return;
    }
    helpers.setValue(selected);
    setIsOpen(false);
  };

  return (
    <FieldWrapper>
      <FieldStyled
        type="text"
        readOnly
        placeholder="Booking date*"
        aria-label="Booking date"
        value={field.value ? format(field.value, "dd.MM.yyyy") : ""}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <CalendarWrapper ref={ref} aria-label="Calendar to select booking date">
          <StyledDayPicker
            mode="single"
            selected={field.value}
            navLayout="around"
            showOutsideDays
            onSelect={handleSelect}
            fromDate={today}
            weekStartsOn={1}
            locale={customLocale}
          />
        </CalendarWrapper>
      )}
      {meta.touched && meta.error && <ErrorStyled>{meta.error}</ErrorStyled>}
    </FieldWrapper>
  );
};

export default DateInput;
