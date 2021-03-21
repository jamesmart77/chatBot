import React, { useState } from "react";
import './App.css';
import { Chatbot } from "react-chatbot-kit";
import config from "./configs/botConfig";
import MessageParser from "./widgets/MessageParser";
import ActionProvider from "./widgets/ActionProvider";

function App() {
    const [showBot, toggleBot] = useState(false);

    const saveMessages = (messages) => {
        localStorage.setItem("chat_messages", JSON.stringify(messages));
    };

    const loadMessages = () => {
        return JSON.parse(localStorage.getItem("chat_messages"));
    };

    const buttonText = showBot ? "Close Botty" : "Open Botty";

    return (
        <div className="App">
            {showBot && (
                <Chatbot
                    className="chatbot-container"
                    config={config}
                    actionProvider={ActionProvider}
                    messageHistory={loadMessages()}
                    messageParser={MessageParser}
                    saveMessages={saveMessages}
                />
            )}
            <button
                className="toggle-btn"
                onClick={() => toggleBot((prev) => !prev)}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default App;