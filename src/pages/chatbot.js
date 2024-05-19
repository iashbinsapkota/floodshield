import React, { useState, useEffect } from 'react';

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    { id: 1, question: 'Question 1', answer: 'Answer 1' },
    { id: 2, question: 'Question 2', answer: 'Answer 2' },
    { id: 3, question: 'Question 3', answer: 'Answer 3' },
    // Add more FAQs and answers as needed
  ];

  useEffect(() => {
    // Reset chat history when the chatbot is closed or refreshed
    if (!isOpen) {
      setChatHistory([]);
      setShowQuestions(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setChatHistory([...chatHistory, { sender: 'user', message: inputText }]);
      if (selectedQuestion) {
        setChatHistory([...chatHistory, { sender: 'bot', message: selectedQuestion.answer }]);
        setChatHistory([...chatHistory, { sender: 'bot', message: 'We hope this information was helpful.' }]);
        setSelectedQuestion(null);
      } else {
        setChatHistory([...chatHistory, { sender: 'bot', message: "I'm sorry, I couldn't find an answer to that question." }]);
      }
      setInputText('');
    }
  };

  const handleOpenChatBot = () => {
    setIsOpen(true);
    setShowQuestions(true);
  };

  const handleCloseChatBot = () => {
    setIsOpen(false);
  };

  const handleQuestionClick = (faq) => {
    setSelectedQuestion(faq);
    setInputText(faq.question);
  };

  return (
    <div style={{ position: 'fixed', bottom: isOpen ? '30' : '30px', right: '20px', width: '300px', transition: 'bottom 0.5s ease-in-out', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div style={{ borderBottom: '1px solid #ccc', padding: '10px', cursor: 'pointer' }} onClick={isOpen ? handleCloseChatBot : handleOpenChatBot}>
        ChatBot
      </div>
      {isOpen && (
        <>
          <div style={{ height: '200px', overflowY: 'scroll', padding: '10px' }}>
            {showQuestions ? (
              <>
                
                {faqs.map((faq, index) => (
                  <button key={index} style={{ padding: '5px', cursor: 'pointer', border: 'none', backgroundColor: 'transparent', borderBottom: '1px solid #ccc', width: '100%', textAlign: 'left' }} onClick={() => handleQuestionClick(faq)}>
                    {faq.question}
                  </button>
                ))}
              </>
            ) : (
              <>
                {chatHistory.map((chat, index) => (
                  <div key={index} style={{ padding: '5px', textAlign: chat.sender === 'user' ? 'right' : 'left' }}>
                    <strong>{chat.sender === 'user' ? 'You' : 'Bot'}:</strong> {chat.message}
                  </div>
                ))}
                <input type="text" value={inputText} onChange={handleInputChange} placeholder="Type your message..." style={{ width: '100%', padding: '5px' }} />
                <button onClick={handleSendMessage} style={{ width: '100%', padding: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '5px' }}>Send</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingChatBot;
