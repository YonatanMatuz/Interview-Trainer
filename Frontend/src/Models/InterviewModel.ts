import { Languages, Difficulty } from "./InterviewEnums"

// This model sends the users chosen interview parameters. 

class InterviewModel {

    public language: Languages;
    public difficulty: Difficulty;
    public questionsNum: number;

    public constructor(interview: InterviewModel) {
        this.language = interview.language;
        this.difficulty = interview.difficulty;
        this.questionsNum = interview.questionsNum;
    }

    // The reason we end the questions with |||, is to indicate when each question ends, to make it easier to later split into a string array
    // ||| was chosen as it is unlikely to appear naturally in a question and cause a bug.
    public static generatePrompt(interview: InterviewModel): string {
        const prompt = `
        Write ${interview.questionsNum} job interview questions for the ${interview.language} programming language.
        Each question should be suitable for ${interview.difficulty} difficulty level. Mark the end of each question with |||.
        `
        return prompt.trim();
    }

}

export default InterviewModel;