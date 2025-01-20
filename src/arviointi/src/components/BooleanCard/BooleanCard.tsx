import { OatGradeType } from "../../types/oat-grade-types";
import { BooleanGradeStateContainer } from "../../types/gradestates";
import "./BooleanCard.css";

interface IBooleanCard {
  oatGrade: OatGradeType;
  handleBooleanChange: (gradeinfo: BooleanGradeStateContainer) => void;
}

export default function GradeCard({
  oatGrade,
  handleBooleanChange,
}: IBooleanCard) {
  return (
    <div className="grade-card-row">
      {oatGrade.boolean_criteria &&
        oatGrade.boolean_criteria.map((criterion) => (
          <div id="bool-criterion-box" className="criterion-box" key={criterion.id}>
            <h4>{criterion.title}</h4>

            <p>{criterion.description}</p>

            <div className="bool-criterion-toggle">
              <input
                type="checkbox"
                id={criterion.id}
                name={criterion.id}
                onChange={(e) =>
                  handleBooleanChange({
                    [criterion.id]: {
                      grade: e.target.checked,
                      description: criterion.description,
                    },
                  })
                }
                className="bool-custom-checkbox"
              />
              <label
                htmlFor={criterion.id}
                className="custom-custom-toggle-label"
                title={criterion.description}
              >
              </label>
            </div>
          </div>
        ))}
    </div>
  );
}
