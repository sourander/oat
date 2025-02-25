import {
  OatGradeType,
  NumericalCriteria,
  BooleanCriteria,
} from "../../types/oat-grade-types";
import { formatDescription } from "../../utils/copytoclipboard";
import "./CopyCourseGrading.css";

// The stuff above could be placed into a function like this:
function gatherNumericalOptionsForGrade(
  grade: number,
  criteria: NumericalCriteria[]
) {
  let options: string[] = [];
  criteria.forEach((criterion) => {
    const optionsForGrade = criterion.options.filter((o) => o.grade === grade);
    optionsForGrade.forEach((option) => {
      options.push(formatDescription(option.desc));
    });
  });
  return options;
}

function formatAllCriteriaForCopy(
  numerical: NumericalCriteria[] | undefined,
  boolean: BooleanCriteria[] | undefined
) {
  // Early exit
  if (!numerical) {
    console.error(
      "No numerical criteria found while performing formatAllCriteriaForCopy"
    );
    return "";
  }

  const n = numerical.length;
  const m = boolean ? boolean.length : 0;

  let formattedString = `Kurssin arviointi perustuu ${n} numeraalisen kriteerin painotettuun keskiarvoon:\n\n`;

  numerical?.forEach((criterion) => {
    const t: string = criterion.title;
    const w: number = criterion.weight;
    const d: string = formatDescription(criterion.description);

    formattedString += `${t} (${w} %): ${d}\n`;
  });

  // if boolean criteria is not undefined or empty, add the next sentence
  if (m > 0) {
    formattedString += `\nNumeroiden lisäksi ${m} väitteen tulee olla totta: \n\n`;

    boolean?.forEach((criterion) => {
      const ft = formatDescription(criterion.title);
      const fd = formatDescription(criterion.description);
      formattedString += `${ft} (Totta/Tarua): ${fd}\n`;
    });
  }

  formattedString += "\nHylätty (arvosana 0)\n";
  formattedString += gatherNumericalOptionsForGrade(0, numerical).join("\n");
  // If there are boolean options, we should also print ("Seuraava ei ole totta: {boolean description}")
  if (m > 0) {
    boolean?.forEach((criterion) => {
      const ft = formatDescription(criterion.title);
      formattedString += `\n${ft} (Totta/Tarua) väite ei täyty.\n`;
    });
  }
  formattedString += "\n\n";

  formattedString += "Tyydyttävä (arvosana 1)\n";
  formattedString += gatherNumericalOptionsForGrade(1, numerical).join("\n");
  formattedString += "\n\n";

  formattedString += "Hyvä (arvosana 3)\n";
  formattedString += gatherNumericalOptionsForGrade(3, numerical).join("\n");
  formattedString += "\n\n";

  formattedString += "Kiitettävä (arvosana 5)\n";
  formattedString += gatherNumericalOptionsForGrade(5, numerical).join("\n");
  formattedString += "\n\n";

  console.log(formattedString);

  return formattedString;
}

interface ICopyCourseGradingProps {
  oatGrade: OatGradeType;
}

export default function CalculatedGrade({ oatGrade }: ICopyCourseGradingProps) {
  const copyToClipboard = () => {
    const formattedString = formatAllCriteriaForCopy(
      oatGrade.numerical_criteria ?? [],
      oatGrade.boolean_criteria ?? []
    );

    navigator.clipboard.writeText(formattedString);
  };

  return (
    <div className="copy-course-grading">
      <button onClick={copyToClipboard}>Copy Criteria (for Teacher)</button>
    </div>
  );
}
