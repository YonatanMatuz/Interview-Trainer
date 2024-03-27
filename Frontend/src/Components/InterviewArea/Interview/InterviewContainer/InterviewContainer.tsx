import { useState } from "react";
import "./InterviewContainer.css";
import { Difficulty, Languages } from '../../../../Models/InterviewEnums';
import { useForm } from "react-hook-form";
import InterviewModel from "../../../../Models/InterviewModel";
import dataService from "../../../../Services/InterviewService";
import notifyService from "../../../../Services/NotifyService";
import InterviewManager from "../InterviewManager/InterviewManager";
import Spinner from "../../../SharedArea/Spinners/InterviewGeneratingSpinner/InterviewGeneratingSpinner";

// This component is the main container holding the form in which the user sends his interview parameters, and the InterviewManager where the interview itself takes place.

function InterviewContainer(): JSX.Element {

    let [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);

    let [isInterviewGenerating, setIsInterviewGenerating] = useState<boolean>(false);

    const {register, handleSubmit} = useForm<InterviewModel>();

    function send(interview: InterviewModel): void {

        setIsInterviewGenerating(true);

        dataService.getInterviewCompletion(interview)
        .then(GPTcompletion => { 
            setInterviewQuestions(GPTcompletion);   
            setIsInterviewGenerating(false);
        })
        .catch(err => notifyService.error(err));

    };

    return (    

        <div className="InterviewContainer">


            <form onSubmit={handleSubmit(send)}>

                <div>

                    <h1>Job Interview Trainer</h1>

                    Welcome, below are parameters for your job interview. In order they are: language, difficulty, and number of interview questions.
                    <br/>
                    <br/>

                    ChatGPT will construct you a interview based on these parameters, and will provide a rating and feedback for every question you've answered.
                    <br/>
                    <br/>

                    You may submit the answer as many times as you want to try and improve your answer, if you want anthor interview generate a new one.
                    <br/>
                    <br/>

                </div>

                <select defaultValue="" required {...register("language")}>

                    <option disabled value="">Please select a language</option>

                    {Object.values(Languages).map(lang => 

                        <option key={lang} value={lang}> {lang} </option>

                    )}

                </select>
                
                <select defaultValue="" required {...register("difficulty")}>

                    <option disabled value="">Please select a difficulty</option>

                    {Object.values(Difficulty).map(diff => 

                        <option key={diff} value={diff}> {diff} </option>

                    )}

                </select>

                <input type="number" required min="1" max="10" step="1"  {...register("questionsNum")}/>

                <button>Generate interview</button>

            </form>
            
            {isInterviewGenerating === true && <Spinner />}

            {interviewQuestions.map(question => <InterviewManager key={question} interviewQuestion={question}/>) }

        </div>

    );
    
}

export default InterviewContainer;
