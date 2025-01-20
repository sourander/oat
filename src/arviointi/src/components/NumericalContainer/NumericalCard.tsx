import { OatGradeType } from "../../types/oat-grade-types";
import { GradeStateContainer } from "../../types/gradestates";
import "./NumericalCard.css";

interface IGradeCard {
  oatGrade: OatGradeType;
  handleGradeChange: (gradeinfo: GradeStateContainer) => void;
}

export default function GradeCard({ oatGrade, handleGradeChange }: IGradeCard) {
  const gradeCardRow = (
    <div className="grade-card-row">
      {oatGrade.numerical_criteria &&
        oatGrade.numerical_criteria.map((criterion) => (
          <div className="criterion-box" key={criterion.id}>
            <h3>
              {criterion.title} <span className="criterion-weight">weight: {criterion.weight} %</span>
            </h3>

            <p>{criterion.description}</p>

            {criterion.options.map((gradeOption) => (
              <div className="num-criterion-radio" key={gradeOption.grade}>
                <input
                  type="radio"
                  id={`${criterion.id}-${gradeOption.grade}`}
                  name={criterion.id}
                  value={gradeOption.grade}
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
            ))}
          </div>
        ))}
    </div>
  );

  return (
    <>{gradeCardRow}</>
  )
}
