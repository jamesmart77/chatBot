import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../customComponents/BotAvatar";
import MessageParser from "../widgets/MessageParser";
import ActionProvider from "../widgets/ActionProvider";

const botName = "Botty";

const config = {
    botName: botName,
    lang: "no",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#ddd",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    initialMessages: [
        createChatBotMessage(
            `Hi I'm ${botName}. I’m here to help you explain how I work.`
        ),
        createChatBotMessage(
            "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
            {
                withAvatar: false,
                delay: 500,
                widget: "overview",
            }
        ),
    ],
    // state: {
    //     gist: "",
    // },
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
    },
    // widgets: [
    //     // {
    //     //     widgetName: "overview",
    //     //     widgetFunc: (props) => <Overview {...props} />,
    //     //     mapStateToProps: ["gist"],
    //     // },
    //     {
    //         widgetName: "messageParser",
    //         widgetFunc: (props) => <MessageParser {...props} />,
    //         mapStateToProps: ["gist"],
    //     },
    //     {
    //         widgetName: "actionProviderDocs",
    //         widgetFunc: (props) => <ActionProvider {...props} />,
    //         mapStateToProps: ["gist"],
    //     },
    // ],
};

export default config;