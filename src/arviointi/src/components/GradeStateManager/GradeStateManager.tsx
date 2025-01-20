import { useState, useEffect } from "react";

import { OAT_GRADE_TYPES } from "../../data/oat-data";
import {
  GradeStateContainer,
  BooleanGradeStateContainer,
} from "../../types/gradestates";
import NumericalCard from "../NumericalContainer/NumericalCard";
import BooleanCard from "../BooleanCard/BooleanCard";
import CalculatedGrade from "../CalculatedGrade/CalculatedGrade";
import "./GradeStateManager.css";
import { BooleanCriteria } from "../../types/oat-grade-types";

interface IGradeStateManagerProps {
  selectedGrade: number | null;
}

function generateInitialBooleanStates(
  booleanCriteria: BooleanCriteria[] = []
): BooleanGradeStateContainer {
  const initialBooleanStates: BooleanGradeStateContainer = {};

  booleanCriteria.forEach((criterion) => {
    initialBooleanStates[criterion.id] = {
      title: criterion.title,
      grade: false,
      description: criterion.description,
    };
  });
  return initialBooleanStates;
}

export default function GradeStateManager({
  selectedGrade,
}: IGradeStateManagerProps) {
  let initialBooleanStates = {};

  if (selectedGrade !== null) {
    initialBooleanStates = generateInitialBooleanStates(
      OAT_GRADE_TYPES[selectedGrade].boolean_criteria
    );
  }

  // States
  const [selectedGrades, setSelectedGrades] = useState<GradeStateContainer>({});
  const [selectedBooleanGrades, setSelectedBooleanGrades] =
    useState<BooleanGradeStateContainer>(initialBooleanStates);

  // Reset states when selectedGrade changes
  useEffect(() => {
    setSelectedGrades({});
    setSelectedBooleanGrades(initialBooleanStates);
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

  let gradeCardsDisplay = (
    <div className="grade-calculation-info">
      <p>☝️ Valitse drop-down -valikosta tyyppi. 👆</p>
      <h3>Arvosanan laskentakaava</h3>
      <p>
        Here should be an informative message about the grade calculation. It
        should explain how the grade will be calculated once all the grades have
        been set. It should also explain the special rules that apply to.
      </p>
    </div>
  );

  if (selectedGrade !== null) {
    const oatGrade = OAT_GRADE_TYPES[selectedGrade];

    gradeCardsDisplay = (
      <div id="gradecards-display">
        <h2>{oatGrade.title}</h2>
        <p>{oatGrade.description}</p>

        <NumericalCard
          oatGrade={oatGrade}
          handleGradeChange={handleGradeChange}
          selectedGrades={selectedGrades}
        />

        <BooleanCard
          oatGrade={oatGrade}
          handleBooleanChange={handleBooleanChange}
          selectedBooleanGrades={selectedBooleanGrades}
        />

        <CalculatedGrade
          oatGrade={oatGrade}
          selectedGrades={selectedGrades}
          selectedBooleanGrades={selectedBooleanGrades}
        />
      </div>
    );
  }

  return <>{gradeCardsDisplay}</>;
}
