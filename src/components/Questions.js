import React, { useState } from 'react';
import axios from 'axios';

function Questions() {
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const sendQuestion = () => {
        axios.post('http://localhost:3001/send-question', { email, question })
            .then(response => {
                alert('Frage gesendet!');
            })
            .catch(error => {
                alert('Fehler beim Senden der Frage');
            });
    };

    return (
        <div>
            <h1>Frage senden</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail Adresse"
            />
            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ihre Frage"
            />
            <button onClick={sendQuestion}>Frage senden</button>
        </div>
    );
}

export default Questions;
