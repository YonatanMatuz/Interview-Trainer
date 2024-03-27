import axios from "axios";

class InterceptorService {

    public create(): void {

        axios.interceptors.request.use(requestObject => {

            const apiKey = process.env.REACT_APP_API_KEY;
            
            requestObject.headers.setAuthorization("Bearer " + apiKey);
            
            return requestObject;

        });
    }
}

const interceptorService = new InterceptorService();

export default interceptorService;