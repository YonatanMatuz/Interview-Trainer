// The request body with the properties required to use openAI's API

class PromptRequestModel {

    public prompt: string;
    public model = "gpt-3.5-turbo-instruct";
    public max_tokens = 2500;

    public constructor(prompt: string) {
        this.prompt = prompt;
    }

}

export default PromptRequestModel;