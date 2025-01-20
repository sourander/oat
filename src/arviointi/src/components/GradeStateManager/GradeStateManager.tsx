import { useState, useEffect } from "react";

import { OAT_GRADE_TYPES } from "../../data/oat-data";
import {
  GradeStateContainer,
  BooleanGradeStateContainer,
} from "../../types/gradestates";
import NumericalCard from "../NumericalContainer/NumericalCard";
import BooleanCard from "../BooleanCard/BooleanCard";
import "./GradeStateManager.css";

interface IGradeStateManagerProps {
  selectedGrade: number | null;
}

export default function GradeStateManager({
  selectedGrade,
}: IGradeStateManagerProps) {
  // States
  const [selectedGrades, setSelectedGrades] = useState<GradeStateContainer>({});
  const [selectedBooleanGrades, setSelectedBooleanGrades] =
    useState<BooleanGradeStateContainer>({});

  // Reset states when selectedGrade changes
  useEffect(() => {
    setSelectedGrades({});
    setSelectedBooleanGrades({});
  }, [selectedGrade]);

  // Handler for numerical grades
  const handleGradeChange = (updatedGrades: GradeStateContainer) => {
    setSelectedGrades((prevSelectedGrades) => {
      return {
        ...prevSelectedGrades,
        ...updatedGrades, // Merge
      };
    });
  };

  // Handler for boolean grades
  const handleBooleanChange = (updatedGrades: BooleanGradeStateContainer) => {
    setSelectedBooleanGrades((prevSelectedGrades) => {
      return {
        ...prevSelectedGrades,
        ...updatedGrades, // Merge
      };
    });
  };

  let gradeCardsDisplay = <p>☝️ Please select a topic. 👆</p>;

  if (selectedGrade !== null) {
    const oatGrade = OAT_GRADE_TYPES[selectedGrade];

    gradeCardsDisplay = (
      <div id="gradecards-display">
        <h2>{oatGrade.title}</h2>
        <p>{oatGrade.description}</p>

        <NumericalCard
          oatGrade={oatGrade}
          handleGradeChange={handleGradeChange}
        />

        <BooleanCard
          oatGrade={oatGrade}
          handleBooleanChange={handleBooleanChange}
        />
      </div>
    );
  }

  return (
    <>
      {gradeCardsDisplay}

      <div id="grade-state-manager-result">
        <pre>
          {/* Echo each selected grade */}
          {JSON.stringify(selectedGrades, null, 2)}
        </pre>
        <pre>
          {/* Echo each selected boolean grade */}
          {JSON.stringify(selectedBooleanGrades, null, 2)}
        </pre>
      </div>
    </>
  );
}
