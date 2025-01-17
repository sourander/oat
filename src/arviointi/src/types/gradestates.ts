type GradeState = {
  grade: number;
  weight: number;
  description: string;
};

type GradeStateContainer = {
  [key: string]: GradeState;
};

type ExchangeGradeInformation = {
    key: string;
    grade: number;
    weight: number;
    description: string;
}

export type { GradeState, GradeStateContainer, ExchangeGradeInformation };