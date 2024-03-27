// This model sends the users answer to the asked question.

class AnswerModel {

    public relevantQuestion: string;
    public answer: string;
    
    // The constructor does not generate the relevantQuestion property because the object is generated when the user sends the answer form,
    // and relevantQuestion is sent as a prop from the parent component, to solve this conflict, the property is set inside the function that sends the form itself.
    public constructor(input: AnswerModel) {
        this.answer = input.answer;
    }

    public static generatePrompt(input: AnswerModel) {
        const prompt = `
        ${input.answer} is the answer to the question ${input.relevantQuestion}
         (this is in context of a job interview),
         please return a rating of x/10 of how good my answer was and provide feedback on what I could have done better.
         Be extremely strict with the rating and feedback as a real job interviewer would be.
        `;
        return prompt.trim();
    }
}

export default AnswerModel;