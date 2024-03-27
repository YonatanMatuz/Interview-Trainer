import AnswerPromptCard from "../AnswerPromptCard/AnswerPromptCard";
import "./InterviewManager.css";
import interviewerImage from "../../../../Assets/Images/InterviewerImage.png"
import { useState } from "react";
import AnswerFeedbackCard from "../AnswerFeedbackCard/AnswerFeedbackCard";

// The InterviewManager holds the components in charge of the interview process itself: The question, answer, and feedback.

interface InterviewManagerProps {
    interviewQuestion: string;
}

function InterviewManager(props: InterviewManagerProps): JSX.Element {

    const [answerFeedback, setAnswerFeedback] = useState<string>("");

    // This function is passed as a prop to relay AnswerPrompt's completion (the feedback to the answer) to the feedback component via InterviewManager
    function handleFeedbackReceived(answerFeedback: string) {
        setAnswerFeedback(answerFeedback);
    };

    return (

        <div className="InterviewManager">

            <div className="flexColumnContainer">

                <div className="fixedSizeContainer">

                    {props.interviewQuestion}

                </div>

                <img src={interviewerImage}/>

            </div>

            <AnswerPromptCard interviewQuestion={props.interviewQuestion} onFeedbackReceived={handleFeedbackReceived} />

            <AnswerFeedbackCard answerFeedback={answerFeedback} />
			
        </div>
    );

}

export default InterviewManager;
