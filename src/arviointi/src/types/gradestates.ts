type GradeState = {
  grade: number;
  weight: number;
  description: string;
};

type GradeStateContainer = {
  [key: string]: GradeState;
};

type BooleanGradeState = {
    grade: boolean;
    description: string;
};

type BooleanGradeStateContainer = {
    [key: string]: BooleanGradeState;
};

export type { GradeState, GradeStateContainer, BooleanGradeState, BooleanGradeStateContainer };