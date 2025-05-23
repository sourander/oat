import { ChangeEvent } from "react";
import "./GradeTypeSelector.css";

import { OAT_GRADE_TYPES } from "../../data/oat-data";

type GradeTypeSelectorProps = {
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export default function GradeTypeSelector({
  handleSelectChange,
}: GradeTypeSelectorProps) {


  return (
    <div>
      <select
        className="custom-select"
        onChange={handleSelectChange}
        defaultValue=""
      >
        <option value="" disabled>
          Valitse arviointityyppi
        </option>
        {OAT_GRADE_TYPES.map((oatGradeType, index) => (
          <option key={index} value={index}>
            {oatGradeType.title}
          </option>
        ))}
      </select>
    </div>
  );
}
