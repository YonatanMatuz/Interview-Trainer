import "./AnswerFeedbackCard.css";
import chatGPTLogo from "../../../../Assets/Images/ChatGPT-Logo.png"

// Displays the feedback to the submitted answer relevant to the question asked.

interface AnswerFeedbackProps {
    answerFeedback: string;
}

function AnswerFeedbackCard(props: AnswerFeedbackProps): JSX.Element {

    return (

        <div className="AnswerFeedbackCard">

            <div className="fixedColumn">

                <div className="fixedContainer">

                    {props.answerFeedback.length === 0 &&
                        <p> Submit your answer and I will provide you with feedback! </p>
                    } 

                    {props.answerFeedback}

                </div>

            </div>

            <img src={chatGPTLogo} />
			
        </div>
        
    );
    
}

export default AnswerFeedbackCard;
