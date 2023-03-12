export const arrayItems = [
    {
    name: 'Q&A',
    id: 'q&a',
    description:'Answer questions based on existing knowledge',
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
        name: 'Explain it like I am 8',
        id: 'eli8',
        description:'Explain a complex topic in simple terms',
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
    }
    },
    {
        name: 'code meaning',
        id: 'coder',
        description:'explains code',
        option: {
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        }
    }
]