import { OAT_GRADE_TYPES } from "../data/oat-data";
import { OatGradeType, NumericalCriteria } from "../types/oat-grade-types";

const validateNumericalCriteria = (criteria: NumericalCriteria[]): boolean => {
    const totalWeight = criteria.reduce((sum, c) => sum + c.weight, 0);
    return totalWeight === 100;
};

function validateNumericalWeightSumto100(data: OatGradeType[]): string[] {
    const errors: string[] = [];

    data.forEach((gradeType) => {
        if (gradeType.numerical_criteria) {
            if (!validateNumericalCriteria(gradeType.numerical_criteria)) {
                errors.push(`The total weight of numerical criteria for grade type "${gradeType.title}" is not 100.`);
            }
        }
    });

    return errors;
}

// function anotherValidator(data: OatGradeType[]): string[] {
//     const errors: string[] = [];

//     console.log("data", data);

//     return errors;
// }

function validateUniqueIDs(data: OatGradeType[]): string[] {
    const errors: string[] = [];

    const ids = data.map((gradeType) => gradeType.id);
    const uniqueIds = new Set(ids);

    if (ids.length !== uniqueIds.size) {
        errors.push("Grade type IDs must be unique.");
    }

    return errors;
}

test("All numerical criteria weights sum to 100", () => {
    const errors = validateNumericalWeightSumto100(OAT_GRADE_TYPES);

    expect(errors).toEqual([]);
});

test("All grade type IDs are unique", () => {
    const errors = validateUniqueIDs(OAT_GRADE_TYPES);

    expect(errors).toEqual([]);
});