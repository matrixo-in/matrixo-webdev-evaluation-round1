const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const { GoogleGenerativeAI } = require("@google/generative-ai");

setGlobalOptions({ maxInstances: 10 });

const genAI = new GoogleGenerativeAI(require("firebase-functions").config().gemini.api_key);

exports.summarizeHealthText = onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  try {
    const { text, length } = req.body;

    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Invalid text input' });
      return;
    }

    let prompt = '';
    switch (length) {
      case 'short':
        prompt = `Summarize the following health text in a short paragraph: ${text}`;
        break;
      case 'medium':
        prompt = `Provide a medium-length summary of the following health information: ${text}`;
        break;
      case 'detailed':
        prompt = `Give a detailed summary of the following health text, including key points and recommendations: ${text}`;
        break;
      default:
        prompt = `Summarize the following health text: ${text}`;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    res.json({ summary });
  } catch (error) {
    logger.error('Error summarizing text:', error);
    res.status(500).json({ error: 'Failed to summarize text' });
  }
});
