// src/Questions.js
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './App.css';

const Questions = () => {
  const [questions, setQuestions] = useState([
    { question: '', answer: '', isEditing: false },
    { question: '', answer: '', isEditing: false },
    { question: '', answer: '', isEditing: false }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const user = auth.currentUser;

  useEffect(() => {
    const fetchQuestions = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'questions', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setQuestions(docSnap.data().questions);
          }
        } catch (error) {
          setError(error.message);
        }
      }
      setLoading(false);
    };
    fetchQuestions();
  }, [user]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions[index][name] = value;
      return newQuestions;
    });
  };

  const handleEdit = (index) => {
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions[index].isEditing = !newQuestions[index].isEditing;
      return newQuestions;
    });
  };

  const handleSubmit = async () => {
    if (user) {
      try {
        const docRef = doc(db, 'questions', user.uid);
        await setDoc(docRef, { questions });
        alert('Fragen gespeichert');
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (loading) {
    return <p>Laden...</p>;
  }

  return (
    <div className="form-container">
      <h2>Fragen</h2>
      {questions.map((item, index) => (
        <div key={index}>
          {item.isEditing ? (
            <div>
              <input
                type="text"
                name="question"
                value={item.question}
                onChange={(e) => handleChange(index, e)}
                placeholder="Frage"
                required
              />
              <input
                type="text"
                name="answer"
                value={item.answer}
                onChange={(e) => handleChange(index, e)}
                placeholder="Antwort"
                required
              />
              <button onClick={() => handleEdit(index)}>Speichern</button>
            </div>
          ) : (
            <div>
              <p>Frage: {item.question}</p>
              <p>Antwort: {item.answer}</p>
              <button onClick={() => handleEdit(index)}>Bearbeiten</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Alle speichern</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Questions;
