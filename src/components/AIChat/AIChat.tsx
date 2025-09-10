// src/components/AIChat/AIChat.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './AIChat.module.scss'; // Import SCSS module

// Define types for messages
export interface ChatMessage {
  text: string;
  sender: 'user' | 'ai';
}

// Define props for the AIChat component
interface AIChatProps {
  /**
   * Function to handle sending a message to your AI backend.
   * It receives the user's message and should return the AI's response text.
   */
  onSendMessage: (userMessage: string) => Promise<string>;
  /**
   * Callback function to trigger when the AI determines contact information is needed.
   * You'll implement your contact form/modal logic here.
   */
  onCollectContact: () => void;
  /**
   * Optional: Custom placeholder text for the input field.
   */
  inputPlaceholder?: string;
  /**
   * Optional: Text for the send button.
   */
  sendButtonText?: string;
  /**
   * Optional: Regex patterns that, if matched in AI's response, will trigger onCollectContact.
   * Example: [/contact me/i, /your details/i]
   */
  contactTriggerPatterns?: RegExp[];
  /**
   * Optional: Regex patterns that, if matched in user's message, will trigger onCollectContact.
   * Example: [/i want to speak to someone/i, /get in touch/i]
   */
  userContactRequestPatterns?: RegExp[];
}

const defaultContactTriggerPatterns: RegExp[] = [
  /please provide your contact details/i,
  /could you share your email or phone/i,
  /i need to get in touch/i,
  /fill out this form/i,
];

const defaultUserContactRequestPatterns: RegExp[] = [
  /contact me/i,
  /speak to a human/i,
  /get in touch/i,
  /call me/i,
  /my email is/i,
  /my phone number is/i,
];

const AIChat: React.FC<AIChatProps> = ({
  onSendMessage,
  onCollectContact,
  inputPlaceholder = 'Type your question...',
  sendButtonText = 'Send',
  contactTriggerPatterns = defaultContactTriggerPatterns,
  userContactRequestPatterns = defaultUserContactRequestPatterns,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Function to check if a message (AI or User) should trigger contact collection
  const shouldTriggerContact = useCallback((message: string, patterns: RegExp[]): boolean => {
    return patterns.some(pattern => pattern.test(message));
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isSending) return;

    const userMessage: ChatMessage = { text: trimmedInput, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    // Check if user's message triggers contact collection
    if (shouldTriggerContact(trimmedInput, userContactRequestPatterns)) {
      onCollectContact();
      setIsSending(false);
      return; // Stop here if user explicitly requests contact
    }

    try {
      const aiResponseText = await onSendMessage(trimmedInput);
      const aiMessage: ChatMessage = { text: aiResponseText, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);

      // Check if AI's response triggers contact collection
      if (shouldTriggerContact(aiResponseText, contactTriggerPatterns)) {
        onCollectContact();
      }
    } catch (error) {
      console.error('Error sending message to AI:', error);
      setMessages((prev) => [...prev, { text: 'Sorry, I\'m having trouble connecting right now. Please try again later.', sender: 'ai' }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.length === 0 && (
          <div className={styles.welcomeMessage}>
            Hello! How can I help you today?
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.aiMessage}`}
          >
            <span className={styles.messageBubble}>
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={inputPlaceholder}
          disabled={isSending}
          className={styles.textInput}
        />
        <button type="submit" disabled={isSending} className={styles.sendButton}>
          {isSending ? '...' : sendButtonText}
        </button>
      </form>
    </div>
  );
};

export default AIChat;