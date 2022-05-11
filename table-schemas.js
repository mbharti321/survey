const userSchema = {
    name: String,
    type: [user, admin],
    email: String,
    password: String,
    amount: Number
};

const optionSchema = {
    option: String
};
const questionSchema = {
    question: String,
    answer: String,
    options: [optionSchema]
};

const surveySchema = {
    name: String,
    numberOfQuestions: Number,
    questions: [questionSchema]
};

const responseSchema = {
    surveyId: surveySchema,
    userId: userSchema,
    response: [{
        questionSchema: String
    }]
};

const transactionSchema = {
    amount: Number,
    sender: userSchema,
    receiver: userSchema,
    time: time
}