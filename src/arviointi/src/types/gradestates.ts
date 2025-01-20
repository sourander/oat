type GradeState = {
  title: string;
  grade: number;
  weight: number;
  description: string;
};

type GradeStateContainer = {
  [key: string]: GradeState;
};

type BooleanGradeState = {
    title: string;
    grade: boolean;
    description: string;
};

type BooleanGradeStateContainer = {
    [key: string]: BooleanGradeState;
};

export type { GradeState, GradeStateContainer, BooleanGradeState, BooleanGradeStateContainer };