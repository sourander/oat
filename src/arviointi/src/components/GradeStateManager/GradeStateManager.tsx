import { useState, useEffect } from "react";

import { OAT_GRADE_TYPES } from "../../data/oat-data";
import {
  GradeStateContainer,
  BooleanGradeStateContainer,
} from "../../types/gradestates";
import NumericalCard from "../NumericalCard/NumericalCard";
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
      <p>
        <span className="please-choose-grade-type">
          ☝️ Valitse drop-down -valikosta tyyppi. 👆
        </span>
      </p>
      <div className="grade-calculation-body">
        <h3>Arvosanan laskentakaava</h3>
        <p>
          Arvosana lasketaan kahdenlaisista kriteereistä: numeraalisista (0-5)
          ja totuusehdoista (Tosi/Epätosi). Numeraalinen arvosana lasketaan
          kaavalla, jossa muuttuja
          <span className="inline-code">xN</span> on yksittäisen kriteerin
          arvosana. Asteikko on nollasta viiteen. Muuttuja 
          <span className="inline-code">pN</span> on kriteerin painoarvo (esim.
          0.5 eli 50 %). Kriteereitä on <span className="inline-code">N</span>
          kappaletta. Painoarvojen summa on 1. Kaava alla:
        </p>
        <pre>Arvosana = (x1 * p1) + ... + (xN * pN)</pre>
        <p>
          Lopullinen arvosana pudotetaan kuitenkin nollaan, jos yksikin seuraavista väitteistä on totta:
        </p>
        <ul>
          <li>Useampi kuin yksi kriteeri on arvosanaltaan 0.</li>
          <li>Jokin totuusehdoista on Epätosi.</li>
        </ul>
      </div>
    </div>
  );

  if (selectedGrade !== null) {
    const oatGrade = OAT_GRADE_TYPES[selectedGrade];

    gradeCardsDisplay = (
      <div id="gradecards-display">
        <h2>{oatGrade.title}</h2>
        <p>{oatGrade.description}</p>

        <div className="grade-card-row">
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
        </div>

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
