import { OatGradeType } from "../../types/oat-grade-types";
import { BooleanGradeStateContainer } from "../../types/gradestates";
import "./BooleanCard.css";

interface IBooleanCard {
  oatGrade: OatGradeType;
  handleBooleanChange: (gradeinfo: BooleanGradeStateContainer) => void;
  selectedBooleanGrades: BooleanGradeStateContainer;
}

export default function GradeCard({
  oatGrade,
  handleBooleanChange,
  selectedBooleanGrades,
}: IBooleanCard) {
  // Helper function to handle checkbox change
  const handleCheckboxChange = (
    id: string,
    title: string,
    description: string,
    isChecked: boolean
  ) => {
    handleBooleanChange({
      [id]: {
        title,
        grade: isChecked,
        description,
      },
    });
  };

  // Render a single criterion
  const renderCriterion = (criterion: {
    id: string;
    title: string;
    description: string;
  }) => (
    <div id="bool-criterion-box" className="criterion-box" key={criterion.id}>
      <h4>{criterion.title}</h4>
      <p>{criterion.description}</p>
      <div className="bool-criterion-toggle">
        <input
          type="checkbox"
          id={criterion.id}
          name={criterion.id}
          checked={selectedBooleanGrades[criterion.id]?.grade || false}
          onChange={(e) =>
            handleCheckboxChange(
              criterion.id,
              criterion.title,
              criterion.description,
              e.target.checked
            )
          }
          className="bool-custom-checkbox"
        />
        <label
          htmlFor={criterion.id}
          className="bool-custom-toggle-label"
          title={criterion.description}
        ></label>
      </div>
    </div>
  );

  // Guard clause to handle no boolean_criteria
  if (!oatGrade.boolean_criteria) {
    return null;
  }

  return <>{oatGrade.boolean_criteria.map(renderCriterion)}</>;
}
