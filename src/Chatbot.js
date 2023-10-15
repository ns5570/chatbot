import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class ChatbotComponent extends Component {
  render() {
    const steps = [
      {
        id: '1',
        message: 'Welcome to My Chatbot!',
        trigger: '2',
      },
      {
        id: '2',
        message: 'How can I assist you today?',
        trigger: 'userInput',
      },
      {
        id: 'userInput',
        user: true,
        trigger: 'response',
      },
      {
        id: 'response',
        user: true,
        validator: (value) => {
          // Define custom logic to handle user input and generate responses
          const lowerValue = value.toLowerCase();

          if (lowerValue.includes('hello')) {
            return 'Hello there!';
          } else if (lowerValue.includes('help')) {
            return 'Sure, I can help with various tasks. You can ask me questions, get weather updates, or even tell a joke!';
          } else if (lowerValue.includes('weather')) {
            return 'The weather today is sunny with a high of 75°F.';
          } else if (lowerValue.includes('joke')) {
            return 'Why did the developer go broke? Because he used up all his cache!';
          } else {
            return "I'm sorry, I didn't understand that request. Please ask something else.";
          }
        },
        trigger: 'additionalCommands',
      },
      {
        id: 'additionalCommands',
        message: 'Is there anything else you would like to do?',
        trigger: 'userInput',
      },
    ];

    return (
      <div className="chatbot-container">
        <ChatBot
          headerTitle="My Chatbot"
          steps={steps}
        />
      </div>
    );
  }
}

export default ChatbotComponent;
