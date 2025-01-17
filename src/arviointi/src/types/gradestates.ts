type GradeState = {
  grade: number;
  weight: number;
  description: string;
};

type GradeStateContainer = {
  [key: string]: GradeState;
};

export type { GradeState, GradeStateContainer };