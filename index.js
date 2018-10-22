/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Word Of The Day';
const GET_FACT_MESSAGE = 'Here\'s your word of the day ';
const HELP_MESSAGE = 'You can say tell me a word or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
   'word of the day is demure and meaning of this is quiet modest reserved',
'word of the day is deride and meaning of this is to ridicule laugh at with contempt',
'word of the day is despot and meaning of this is a dictator with absolute power',
'word of the day is diligent and meaning of this is showing care in doing one work',
'word of the day is elated and meaning of this is full of high spirited delight',
'word of the day is eloquent expressing yourself readily',
'word of the day is embezzle and meaning of this is steal money by falsifying records',
'word of the day is empathy and meaning of this is sensitivity to anothers feelings as if they were ones own ',
'word of the day is enmity and meaning of this is ill will hatred hostility',
'word of the day is erudite and meaning of this is learned or scholarly',
'word of the day is extol and meaning of this is to praise',
'word of the day is fabricate and meaning of this is to make up invent',
'word of the day is feral and meaning of this is Savage wild',
'word of the day is flabbergasted and meaning of this is Astounded',
'word of the day is forsake and meaning of this is to give up',
'word of the day is fractious and meaning of this is troublesome',
'word of the day is furtive and meaning of this is secretive',
'word of the day is gluttony and meaning of this is excessive eating or drinking',
'word of the day is gratuitous and meaning of this is uncalled for lacking good reason unwarranted',
'word of the day is haughty and meaning of this is proud',
'word of the day is hypocrisy and meaning of this is Pretending to have feelings',
'word of the day is impeccable and meaning of this is perfect',
'word of the day is impertinent and meaning of this is insolent',
'word of the day is implacable and meaning of this is incapable of being appeased or mitigated',
'word of the day is impudent and meaning of this is casually rude',
'word of the day is indolent and meaning of this is lazy',
'word of the day is inept and meaning of this is not suitable or capable',

];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
