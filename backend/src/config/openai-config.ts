import { Configuration } from 'openai';

export function configureOpenAI() {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGRANZATION_ID,
    });

    return config;
};

