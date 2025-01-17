import { OatGradeType } from "../../types/oat-grade-types";
import { ExchangeGradeInformation } from "../../types/gradestates";
import "./NumericalCard.css";

interface IGradeCard {
  oatGrade: OatGradeType;
  handleGradeChange: (gradeinfo: ExchangeGradeInformation) => void;
}

export default function GradeCard({ oatGrade, handleGradeChange }: IGradeCard) {
  const gradeCard = (
    <>
      {oatGrade.numerical_criteria &&
        oatGrade.numerical_criteria.map((criterion) => (
          <div className="criterion-box" key={criterion.id}>
            <h4>
              {criterion.title} weight: {criterion.weight}
            </h4>

            <p>{criterion.description}</p>

            {criterion.options.map((gradeOption) => (
              <div className="criterion-radio" key={gradeOption.grade}>
                <input
                  type="radio"
                  id={`${criterion.id}-${gradeOption.grade}`}
                  name={criterion.id}
                  value={gradeOption.grade}
                  onChange={(e) =>
                    handleGradeChange({
                      key: criterion.id,
                      grade: parseInt(e.target.value),
                      weight: criterion.weight,
                      description: gradeOption.desc,
                    })
                  }
                  className="custom-radio"
                />
                <label
                  htmlFor={`${criterion.id}-${gradeOption.grade}`}
                  className="custom-radio-label"
                  title={gradeOption.desc}
                >
                  {gradeOption.grade}
                </label>
              </div>
            ))}
          </div>
        ))}
    </>
  );

  return <div id="grade-card">{gradeCard}</div>;
}
