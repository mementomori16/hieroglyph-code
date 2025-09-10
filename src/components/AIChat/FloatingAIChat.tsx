// src/components/FloatingAIChat/FloatingAIChat.tsx
import React, { useState, useEffect, useCallback } from 'react';
import AIChat from './AIChat'; // The core chat UI component
import styles from './FloatingAIChat.module.scss'; // New SCSS module for this wrapper

// Define constants for localStorage keys
const CHAT_CLOSED_KEY = 'aiChatClosedByUser';
const AUTO_OPEN_DELAY_MS = 2000; // 2 seconds delay for auto-opening

const FloatingAIChat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // State to remember if the user explicitly closed the chat
  const [hasUserClosedChat, setHasUserClosedChat] = useState(() => {
    // Initialize from localStorage
    return localStorage.getItem(CHAT_CLOSED_KEY) === 'true';
  });

  // Effect to handle auto-opening on page load
  useEffect(() => {
    if (!hasUserClosedChat) {
      const timer = setTimeout(() => {
        setIsChatOpen(true);
      }, AUTO_OPEN_DELAY_MS);

      return () => clearTimeout(timer); // Clean up timer if component unmounts
    }
  }, [hasUserClosedChat]);

  // Function to open the chat
  const openChat = useCallback(() => {
    setIsChatOpen(true);
    // If user opens it, reset the "closed" flag
    setHasUserClosedChat(false);
    localStorage.removeItem(CHAT_CLOSED_KEY);
  }, []);

  // Function to close the chat and remember user preference
  const closeChat = useCallback(() => {
    setIsChatOpen(false);
    setHasUserClosedChat(true);
    localStorage.setItem(CHAT_CLOSED_KEY, 'true');
    setShowContactForm(false); // Also close contact form if chat is closed
  }, []);

  /**
   * This function simulates an AI backend call.
   * In a real application, you would make an API call to your server here.
   */
  const handleAIMessage = useCallback(async (userMessage: string): Promise<string> => {
    console.log('User message to AI:', userMessage);

    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    const lowerCaseMessage = userMessage.toLowerCase();

    // --- Your AI response logic (same as before) ---
    if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
      return "Our pricing varies based on the service. Could you tell me more about your specific needs?";
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('speak to human')) {
      return "I can help with that. Please provide your contact details so a human agent can reach out to you.";
    } else if (lowerCaseMessage.includes('demo')) {
      return "Great! To schedule a demo, please share your email address and we'll send you an invitation.";
    } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello there! How can I assist you today?";
    } else if (lowerCaseMessage.includes('thank you')) {
      return "You're welcome! Is there anything else I can help with?";
    } else {
      return `I received "${userMessage}". I'm still learning, but I can help with questions about pricing, demos, or how to contact us.`;
    }
  }, []);

  const handleCollectContact = useCallback(() => {
    console.log('AI requested contact information.');
    setShowContactForm(true);
  }, []);

  return (
    <>
      {/* Chat Popup */}
      {isChatOpen && (
        <div className={styles.chatPopup}>
          <div className={styles.chatHeader}>
            <span>AI Assistant</span>
            <button className={styles.closeButton} onClick={closeChat}>
              &times;
            </button>
          </div>
          <AIChat
            onSendMessage={handleAIMessage}
            onCollectContact={handleCollectContact}
            inputPlaceholder="Ask me anything..."
            sendButtonText="Send"
          />
        </div>
      )}

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button className={styles.floatingChatButton} onClick={openChat}>
          Chat with us!
        </button>
      )}

      {/* Contact Form Modal (from previous step, now owned by FloatingAIChat) */}
      {showContactForm && (
        <div className={styles.contactFormOverlay}>
          <div className={styles.contactFormModal}>
            <h2>Provide Your Contact Details</h2>
            <p>Please fill out this form so we can get back to you:</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); setShowContactForm(false); }}>
              <input type="text" placeholder="Name" className={styles.formInput} required />
              <input type="email" placeholder="Email" className={styles.formInput} required />
              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>Submit</button>
                <button type="button" onClick={() => setShowContactForm(false)} className={styles.cancelButton}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIChat;