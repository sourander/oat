import { OatGradeType } from "../types/oat-grade-types";

const videoCourse: OatGradeType = {
    id: "video_submission",
    title: "Videoesitys",
    description: `Video submitted by student, 
                  demonstrating the knowledge of the subject.`,
    numerical_criteria: [
        {
            id: "criterion1",
            title: "Content",
            description: "How well the content is explained in the video.",
            weight: 75,
            options: [
            { grade: 0, desc: "The content is not explained." },
            { grade: 1, desc: "The content is explained." },
            { grade: 2, desc: "The content is explained well." },
            { grade: 3, desc: "The content is explained very well." },
            { grade: 4, desc: "The content is explained exceptionally well." },
            { grade: 5, desc: "The content is explained exceptionally well and in an engaging manner." },
            ],
        },
        {
            id: "criterion2",
            title: "Presentation",
            description: "How well the video is presented.",
            weight: 25,
            options: [
            { grade: 0, desc: "The video is not presented." },
            { grade: 1, desc: "The video is presented." },
            { grade: 2, desc: "The video is presented well." },
            { grade: 3, desc: "The video is presented very well." },
            { grade: 4, desc: "The video is presented exceptionally well." },
            { grade: 5, desc: "The video is presented exceptionally well and in an engaging manner." },
            ],
        },
    ],
    boolean_criteria: [
        {
            id: "criterion3",
            title: "Repository is also accessible",
            description: "The student has provided the teacher access to the Gitlab repository.",
        },
    ],
};

const foobarCourse: OatGradeType = {
    id: "foobar_course",
    title: "Foo Bar course",
    description: "Lorem ipsum dolor sit foo bar.",
    numerical_criteria: [
        {
            id: "criterion1",
            title: "Foo",
            description: "How well the foo is bar.",
            weight: 75,
            options: [
            { grade: 0, desc: "The foo is not explained." },
            { grade: 1, desc: "The foo is explained." },
            { grade: 2, desc: "The foo is explained well." },
            { grade: 3, desc: "The foo is explained very well." },
            { grade: 4, desc: "The foo is explained exceptionally well." },
            { grade: 5, desc: "The foo is explained exceptionally well and is very bar." },
            ],
        },
        {
            id: "criterion2",
            title: "Bar",
            description: "How well the bar represents pizza.",
            weight: 25,
            options: [
            { grade: 0, desc: "The video is egg." },
            { grade: 1, desc: "The video is egg, ham." },
            { grade: 2, desc: "The video is egg, ham, spam." },
            { grade: 3, desc: "The video is egg, ham, sausage and spam." },
            { grade: 4, desc: "The video is egg, ham, sausage, spam and spam." },
            { grade: 5, desc: "The video is spam, spam, spam, sauge, spam, egg and spam." },
            ],
        },
    ],
};


export const OAT_GRADE_TYPES: OatGradeType[] = [
    videoCourse,
    foobarCourse,
    // Additional grade types...
];