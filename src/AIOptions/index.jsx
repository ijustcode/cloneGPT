export const arrayItems = [
    {
    name: 'Q&A',
    id: 'q&a',
    description:'This one answers questions based on model\'s knowledge',
    option: {
        model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: 'Text-to-Image (not ready)',
        id: 'tti',
        description:'I\'ll add this later. Text-to-image service',
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    }
]