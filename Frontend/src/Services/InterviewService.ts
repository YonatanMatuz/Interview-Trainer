import axios from "axios";
import InterviewModel from "../Models/InterviewModel";
import appConfig from "../Utils/AppConfig";
import PromptRequestModel from "../Models/PromptRequestModel";
import InterviewQuestions from "../Models/InterviewQuestionsModel";
import AnswerModel from "../Models/AnswerModel";

class InterviewService {

    public async getInterviewCompletion(interview: InterviewModel): Promise<string[]> {

        // Construct prompt, create request body object, and send to openAI's API
        const prompt = InterviewModel.generatePrompt(interview);
        const promptRequest = new PromptRequestModel(prompt);
        const response = await axios.post(appConfig.completionUrl, promptRequest);

        // Parse and store the completion questions into our model array
        const interviewQuestions = this.storeInterviewQuestions(response.data.choices[0].text);

        // Return the filtered and stored questions
        return interviewQuestions.questionsArray
        
    }

    public async getAnswerCompletion(answer: AnswerModel): Promise<string> {

        const prompt = AnswerModel.generatePrompt(answer);
        const promptRequest = new PromptRequestModel(prompt);

        const response = await axios.post(appConfig.completionUrl, promptRequest);
        const completion = response.data.choices[0].text;
        return completion;

    }

    // Internally used function seperated to make the code a bit more readable
    private storeInterviewQuestions(completion: string): InterviewQuestions {
        return new InterviewQuestions(completion);
    }

}

const interviewService = new InterviewService();

export default interviewService;