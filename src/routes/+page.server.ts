import { openAi } from '../openAi';

export const config = {
	runtime: 'nodejs18.x'
};

/** @type {import('./$types').Actions} */
export const actions = {
	checkFood: async ({ cookies, request }: any) => {
		const data = await request.formData();
		const foodInfo = data.get('foodInfo');
		let result: any;
		if (foodInfo) {
			result = await makeRequest(foodInfo);
			if (result !== undefined) {
				const json = JSON.parse(result.data.choices[0].message?.content);
				return { json };
			}
		}
	}
};

const makeRequest = async (foodInfo: string) => {
	const promt = `Based on the selected food that is delimited by the triple dashes create a list of pros and cons. 
    In addition to this you should also rate the food from 1 to 10. where 10 is healthy and 1 is unhealthy. 
    If there are any also include a list over diseases that the food can cause. 
    You shall return the answer as json only with the following keys: foodName, pros, cons, healthRating, diseases. If the given info is not a
    food return a json object with a key: error containing a error message
    ---${foodInfo}---`;
	try {
		const response = await openAi.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: 'You are a dietitian health expert' },
				{
					role: 'user',
					content: promt
				}
			],
			temperature: 0
		});
		console.log(response.data.choices[0].message?.content);

		return response;
	} catch (error) {
		console.log(error);
	}
};
