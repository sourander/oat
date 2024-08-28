function printAnswers(questions) {

    // This will contain e.g. ["q1", "q2"]
    const names = findAllInputNames();

    // Reference to the gradeResultContainer div. Clear it.
    const gradeResultContainerDiv = document.getElementById('gradeResultContainer');
    gradeResultContainerDiv.innerHTML = '';

    // Containers for the totals
    let totalWeightedGrades = 0;
    let totalWeight = 0;
    let zeroGradeCount = 0; // Counter for partial grades that are 0

    // Continue with the rest of the function logic
    for (const [i, name] of names.entries()) {
        const grade = getRadioValue(name);
        const question = questions[i];
        const weight = question.weight || 100; // Default weight to 100 if not provided

        createAnswerParagraph(grade, question, weight);
        
        // Add the weighted value and weight to the totals
        totalWeightedGrades += grade * weight;
        totalWeight += weight;

        // Increment the counter if the grade is 0
        if (grade === 0) {
            zeroGradeCount++;
        }
    }

    // Calculate the weighted average
    let weightedAverage = totalWeightedGrades / totalWeight;

    // Set the weighted average to 0 if two or more partial grades are 0
    if (zeroGradeCount >= 2) {
        weightedAverage = 0;
    }

    createAverageParagraph(weightedAverage, null, 'Weighted Average: ', '(0-5)');
    createAverageParagraph(weightedAverage, normalizeScore, 'Normalized Average: ', '(40-100)');
}

function createAverageParagraph(average, f=null, title='Title Not Set: ', details='(not set)') {
        
        const gradeResultContainerDiv = document.getElementById('gradeResultContainer');
        const paragraph = document.createElement('p');

        if (f) average = f(average);
            
        // Parts of the result
        const parts = [
            { className: 'grade-title', textContent: title },
            { className: 'grade-value', textContent: average.toFixed(2) },
            { className: 'grade-details', textContent: details }
        ];
    
        // Create spans for each part of the result
        for (const part of parts) {
            const span = document.createElement('span');
            span.className = part.className;
            span.textContent = part.textContent;
            paragraph.appendChild(span);
        }
    
        // Append the paragraph to the gradeResultContainer div
        gradeResultContainerDiv.appendChild(paragraph);
    }

function createAnswerParagraph(grade, question, weight) {
    
    const gradeResultContainerDiv = document.getElementById('gradeResultContainer');
    const paragraph = document.createElement('p');
        
    // Parts of the result
    const parts = [
        { className: 'grade-title', textContent: `${question.title}: ` },
        { className: 'grade-value', textContent: `${question.options[grade]} ` },
        { className: 'grade-details', textContent: `(Grade: ${grade}, Weight: ${weight})` }
    ];

    // Create spans for each part of the result
    for (const part of parts) {
        const span = document.createElement('span');
        span.className = part.className;
        span.textContent = part.textContent;
        paragraph.appendChild(span);
    }

    // Append the paragraph to the gradeResultContainer div
    gradeResultContainerDiv.appendChild(paragraph);
}

function normalizeScore(originalScore, minOriginal=0, maxOriginal=5, minNormalized=40, maxNormalized=100) {
    return ((originalScore - minOriginal) / (maxOriginal - minOriginal)) * (maxNormalized - minNormalized) + minNormalized;
}

function findAllInputNames() {
    const inputs = document.querySelectorAll('input');
    const names = [];
    for (const input of inputs) {
        if (!names.includes(input.name)) names.push(input.name);
    }
    return names;
}

function getRadioValue(name) {
    const checkedRadio = document.querySelector(`input[name="${name}"]:checked`);
    if (checkedRadio) return parseInt(checkedRadio.value);
    return undefined;
}

export { printAnswers };