import { OatGradeType } from "../../types/oat-grade-types";
import {
  GradeStateContainer,
  BooleanGradeStateContainer,
} from "../../types/gradestates";
import "./CalculatedGrade.css";
import { formatDescription } from "../../utils/copytoclipboard";

interface ICalculatedGradeProps {
  oatGrade: OatGradeType;
  selectedGrades: GradeStateContainer;
  selectedBooleanGrades: BooleanGradeStateContainer;
}

function formatCriteriaForCopy(
  selectedGrades: GradeStateContainer,
  selectedBooleanGrades: BooleanGradeStateContainer,
  finalGrade: number
) {
  let formattedString = "";

  for (const [_, value] of Object.entries(selectedGrades)) {
    const t = value.title;
    const g = value.grade;
    const d = formatDescription(value.description);
    const w = value.weight;
    formattedString += `${t}: ${g} - ${d} (${w}%)\n\n`;
  }

  for (const [_, value] of Object.entries(selectedBooleanGrades)) {
    const t = value.title;
    const g = value.grade;
    const d = formatDescription(value.description);
    formattedString += `${t}: ${g ? "True" : "False"} - ${d}\n\n`;
  }

  formattedString += `\nFinal grade: ${finalGrade}`;

  console.log(formattedString);

  return formattedString;
}

export default function CalculatedGrade({
  oatGrade,
  selectedGrades,
  selectedBooleanGrades,
}: ICalculatedGradeProps) {
  // Criteria count. We can continue only if all grades have been set.
  const nExpectedNumerical = oatGrade.numerical_criteria?.length;
  const nGivenNumerical = Object.keys(selectedGrades).length;
  const canCalculateGrade = nGivenNumerical === nExpectedNumerical;

  if (!canCalculateGrade) {
    return (
      <div className="hint-to-select-grades">
        ☝️ Valitse kustakin kategoriasta arvosana. 👆
      </div>
    );
  }

  // If any of the booleans is False, the grade will end up being 0
  const allBooleansTrue = Object.values(selectedBooleanGrades).every(
    (grade) => grade.grade === true
  );

  // Special rule: only one numerical value is allowed to be 0. Otherwise final grade is 0.
  const noMoreThanOneZero =
    Object.values(selectedGrades).filter((grade) => grade.grade === 0).length <=
    1;

  let numericalGrade = 0;

  if (canCalculateGrade && allBooleansTrue && noMoreThanOneZero) {
    oatGrade.numerical_criteria?.forEach((criterion) => {
      const grade = selectedGrades[criterion.id]?.grade ?? 0;
      // const grade = selectedGrades[criterion.id].grade;  (old code: good example of a hard to track bug)
      const weight = criterion.weight;
      numericalGrade += grade * (weight / 100);

      // Round by two decimals
      numericalGrade = Math.round(numericalGrade * 100) / 100;
    });
  }

  const copyToClipBoardButton = (
    <button
      className="copy-to-clipboard-button"
      onClick={() => {
        navigator.clipboard.writeText(
          formatCriteriaForCopy(
            selectedGrades,
            selectedBooleanGrades,
            numericalGrade
          )
        );
      }}
    >
      Copy to clipboard
    </button>
  );

  return (
    <>
      <div className="calculated-grade-container">
        <h2>Final Grade</h2>
        <div className="calculated-grade">
          <span className="grade-value">{numericalGrade}</span>
          <span className="grade-max-value">/5</span>
        </div>
      </div>
      {copyToClipBoardButton}
    </>
  );
}
