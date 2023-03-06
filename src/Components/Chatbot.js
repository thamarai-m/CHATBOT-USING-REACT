import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ChatMessage from "./ChatMessage";
import { analyze } from "../utils";

export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            message: "Hi, May I have yor name?",
        },
    ]);

    const [text, setText] = useState("");

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyze(text);
            list = [...list,  { messages: reply } ];
        }
        else {
            list = [
                ...list,
                {
                    message: `Hi, ${text}`,
                },
                {
                    message: "How can I help you?",
                },
            ];
        }
        setMessages(list);
        setText("")
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 1);
    };
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <img
                    src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg"
                    alt="logo"
                    height={200}
                    width={200}
                />
                <h2 className="text-primary">Chatbot</h2>
            </div>
            <div className="chat-message">
                {messages.length > 0 &&
                    messages.map((data) => <ChatMessage {...data} />)}
                <div className="d-flex mt-2">
                    <input
                        type="text"
                        className="form-control"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button type="primary" classname="ms-3" onClick={onSend}>
                        Send
                    </Button>
                </div>
                <div id='copyright' className="mt-3">
                    Copyrights reserverd 20i156</div>
            </div>
        </div>
    );
}