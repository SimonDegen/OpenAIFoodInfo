import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';
import { Configuration, OpenAIApi } from 'openai';

const openAIKey = process.env.PRIVATE_OPENAI_API_KEY
const configuration = new Configuration({apiKey: openAIKey})
export const openAi = new OpenAIApi(configuration)
