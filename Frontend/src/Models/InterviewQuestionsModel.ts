// This model is built purely to fix the problem of the API not remembering the questions he sent and thus not understanding the context of the answer.

class InterviewQuestions {

    // We store the questions recieved as a string array and send each element alongside its answer to provide the context.
    public questionsArray: string[];

    // The constructor seperates the interview into an array of questions, we also filter for empty strings since the last question ends with a |||,
    // And the split method will return a empty string following the final question because of this.
    public constructor(completion: string) {
        this.questionsArray = completion.split("|||").filter(question => question !== "");
    }

}

export default InterviewQuestions;