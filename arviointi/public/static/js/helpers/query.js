function printQuestions(questions) {

    const questionsContainer = document.getElementById('questionsContainer');

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.id = `q${index + 1}`;
        questionDiv.classList.add('question');

        const questionParagraph = document.createElement('h2');
        questionParagraph.textContent = question.questionText;
        questionDiv.appendChild(questionParagraph);
        
        for (let i = 0; i <= 5; i++) {
            const questionRow = document.createElement('div');
            questionRow.classList.add('questionRow');
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `q${index + 1}-r${i}`;
            input.name = `q${index + 1}`;
            input.value = i;
            
            const label = document.createElement('label');
            label.htmlFor = `q${index + 1}-r${i}`;
            label.textContent = question.options[i];

            // Make 0 option (Fail) text red
            if (i === 0) label.classList.add('red');
            
            questionRow.appendChild(input);
            questionRow.appendChild(label);
            questionDiv.appendChild(questionRow);
        }
        
        questionsContainer.appendChild(questionDiv);
    });
}

export { printQuestions };