import { useState } from "react";

import {
    OAT_GRADE_TYPES,
} from "../../data/oat-data";
import {
  GradeStateContainer,
  ExchangeGradeInformation,
} from "../../types/gradestates";
import NumericalCard from "../NumericalContainer/NumericalCard";
import "./GradeStateManager.css";

export default function GradeStateManager({
  selectedGrade,
}: {
  selectedGrade: number | null;
}) {
  const [selectedGrades, setSelectedGrades] = useState<GradeStateContainer>({});

  const handleGradeChange = (gradeinfo: ExchangeGradeInformation) => {
    console.log("JSON.stringify(gradeinfo)", JSON.stringify(gradeinfo));
    setSelectedGrades((prevSelectedGrades) => {
      return {
        ...prevSelectedGrades,
        [gradeinfo.key]: {
          grade: gradeinfo.grade,
          weight: gradeinfo.weight,
          description: gradeinfo.description,
        },
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
