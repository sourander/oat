import { NumericalCriteria, OatGradeType, GradeOption } from "../../types/oat-grade-types";
import { GradeStateContainer } from "../../types/gradestates";
import "./NumericalCard.css";

interface INumericalCard {
  oatGrade: OatGradeType;
  handleGradeChange: (gradeinfo: GradeStateContainer) => void;
  selectedGrades: GradeStateContainer;
}
const numericalRadioButtons = ({
  criterion,
  gradeOption,
  selectedGrades,
  handleGradeChange,
}: {
  criterion: NumericalCriteria;
  gradeOption: GradeOption;
  selectedGrades: GradeStateContainer;
  handleGradeChange: (gradeinfo: GradeStateContainer) => void;
}) => (
  <div className="num-criterion-radio" key={gradeOption.grade}>
    <input
      type="radio"
      id={`${criterion.id}-${gradeOption.grade}`}
      name={criterion.id}
      value={gradeOption.grade}
      checked={selectedGrades[criterion.id]?.grade === gradeOption.grade}
      onChange={() =>
        handleGradeChange({
          [criterion.id]: {
            title: criterion.title,
            grade: gradeOption.grade,
            weight: criterion.weight,
            description: gradeOption.desc,
          },
        })
      }
      className="num-custom-radio"
    />
    <label
      htmlFor={`${criterion.id}-${gradeOption.grade}`}
      className="num-custom-radio-label"
      title={gradeOption.desc}
    >
      {gradeOption.grade}
    </label>
  </div>
);


const numericalCriterion = ({
  criterion,
  selectedGrades,
  handleGradeChange,
}: {
  criterion: NumericalCriteria;
  selectedGrades: GradeStateContainer;
  handleGradeChange: (gradeinfo: GradeStateContainer) => void;
}) => (
    <div className="criterion-box" key={criterion.id}>
      <h3>
        {criterion.title}{" "}
        <span className="criterion-weight">weight: {criterion.weight} %</span>
      </h3>
      <p>{criterion.description}</p>

      {criterion.options.map((gradeOption) => (
        numericalRadioButtons({
          criterion,
          gradeOption,
          selectedGrades,
          handleGradeChange,
        })
      ))}
    </div>
);

export default function NumericalCard({
  oatGrade,
  handleGradeChange,
  selectedGrades,
}: INumericalCard) {
  return (
    <div className="grade-card-row">
      {oatGrade.numerical_criteria &&
        oatGrade.numerical_criteria.map((criterion) => (
          numericalCriterion({
            criterion,
            selectedGrades,
            handleGradeChange,
          })
        ))}
    </div>
  );
}
