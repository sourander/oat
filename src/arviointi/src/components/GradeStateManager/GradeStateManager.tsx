import { useState } from "react";

import { OAT_GRADE_TYPES } from "../../data/oat-data";
import { GradeStateContainer } from "../../types/gradestates";
import NumericalCard from "../NumericalContainer/NumericalCard";
import "./GradeStateManager.css";

interface IGradeStateManagerProps {
  selectedGrade: number | null;
}

export default function GradeStateManager({
  selectedGrade,
}: IGradeStateManagerProps) {
  const [selectedGrades, setSelectedGrades] = useState<GradeStateContainer>({});

  const handleGradeChange = (updatedGrades: GradeStateContainer) => {
    setSelectedGrades((prevSelectedGrades) => {
      return {
        ...prevSelectedGrades,
        ...updatedGrades, // Merge
      };
    });
  };

  let gradeCardsDisplay = <p>Please select a topic.</p>;

  if (selectedGrade !== null) {
    const oatGrade = OAT_GRADE_TYPES[selectedGrade];

    gradeCardsDisplay = (
      <div id="gradecards-display">
        <h2>{oatGrade.title}</h2>
        <p>{oatGrade.description}</p>
        <pre>
          <code>{oatGrade.id}</code>
        </pre>

        <NumericalCard
          oatGrade={oatGrade}
          handleGradeChange={handleGradeChange}
        />
      </div>
    );
  }

  return (
    <>
      <div id="grade-state-manager-form">{gradeCardsDisplay}</div>

      <div id="grade-state-manager-result">
        <pre>
          {/* Echo each selected grade */}
          {JSON.stringify(selectedGrades, null, 2)}
        </pre>
      </div>
    </>
  );
}
