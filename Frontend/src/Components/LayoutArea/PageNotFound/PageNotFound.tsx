import "./PageNotFound.css";
import gifSource from "../../../Assets/Images/PageNotFound.gif"
import { NavLink } from "react-router-dom";

function PageNotFound(): JSX.Element {

    return (

        <div className="PageNotFound">

			<img src={gifSource} />

            <NavLink to={"/home"}>

                <button>Home Page</button>
                
            </NavLink>

        </div>
    );
    
}

export default PageNotFound;
