import { useForm } from "react-hook-form";
import "./AnswerPromptCard.css";
import dataService from "../../../../Services/InterviewService";
import notifyService from "../../../../Services/NotifyService";
import AnswerModel from "../../../../Models/AnswerModel";
import intervieweeImage from "../../../../Assets/Images/IntervieweeImage.png";

// User sends his answer to the asked question

interface AnswerPromptProps {
    interviewQuestion: string;
    onFeedbackReceived: Function;
}

function AnswerPromptCard(props: AnswerPromptProps): JSX.Element {

    const {register, handleSubmit} = useForm<AnswerModel>();

    // To solve the problem of the API not remembering the question the user is submitting the answer to, we passed the question as a prop,
    // and attach it to the answer prompt being sent, with relevant context being provided inside the model.
    function send(answer: AnswerModel) {
        answer.relevantQuestion = props.interviewQuestion;
        dataService.getAnswerCompletion(answer)
        .then(GPTcompletion => props.onFeedbackReceived(GPTcompletion))
        .catch(err => notifyService.error(err));
    };

    return (

        <div className="AnswerPromptCard">

            <form onSubmit={handleSubmit(send)}>

                <textarea required maxLength={2500} {...register("answer")}></textarea>

                <button>Submit Answer</button>

            </form>

            <img src={intervieweeImage}/>   
		
        </div>
    );

}

export default AnswerPromptCard;
