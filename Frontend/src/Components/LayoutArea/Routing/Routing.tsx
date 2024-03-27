import { Navigate, Route, Routes } from "react-router-dom";
import InterviewContainer from "../../InterviewArea/Interview/InterviewContainer/InterviewContainer"
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {

    return (

		<Routes>

            <Route path="/home" element={<InterviewContainer />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
        
    );
    
}

export default Routing;
