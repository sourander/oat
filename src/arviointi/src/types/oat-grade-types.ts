export type GradeOption = {
    grade: 0 | 1 | 2 | 3 | 4 | 5;
    desc: string;
};

export type NumericalCriteria = {
    id: string;
    title: string;
    description: string;
    weight: number;
    options: GradeOption[];
  };

 export type BooleanCriteria = {
    id: string;
    title: string;
    description: string;
  };
  
  export type OatGradeType = {
    id: string;
    title: string;
    description: string;
    numerical_criteria?: NumericalCriteria[];  // Optional
    boolean_criteria?: BooleanCriteria[]; // Optional
  };
