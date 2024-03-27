import "./InterviewGeneratingSpinner.css";
import gifSource from "../../../../Assets/Images/InterviewGeneratingSpinner.gif"

function InterviewGeneratingSpinner(): JSX.Element {
    
    return (

        <div className="InterviewGeneratingSpinner">

			<img src={gifSource} alt="Loading" />

        </div>
    );
    
}

export default InterviewGeneratingSpinner;
