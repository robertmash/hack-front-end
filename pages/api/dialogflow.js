// pages/api/dialogflow.js
const dialogflow = require('@google-cloud/dialogflow');
const { v4: uuid } = require('uuid');

// This will be used to store session IDs for different users
// In a production app, you'd want to use a database or cookie-based solution
const sessions = {};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const projectId = process.env.GOOGLE_PROJECT_ID || 'your-project-id';
    const sessionId = uuid();
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: req.body.query,
          languageCode: 'en-US',
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    res.status(200).json({
      response: result.fulfillmentText || 'No response available',
      intent: result.intent.displayName,
      confidence: result.intentDetectionConfidence,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
}

// Function to get or create a session ID
function getSessionId(req) {
  // In a real app, you might use cookies or authentication to identify users
  // For simplicity, we're using IP address as a basic identifier
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  if (!sessions[ipAddress]) {
    sessions[ipAddress] = uuid();
  }
  
  return sessions[ipAddress];
}

// Function to detect intent using Dialogflow
async function detectIntent(projectId, sessionId, query, languageCode) {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    credentials: JSON.parse(
      Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON, 'base64').toString()
    ),
  });
  
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  // Send request and get response
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  return result.fulfillmentText || "I didn't understand. Can you try again?";
}