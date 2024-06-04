// src/components/QuestionAnswerForm.js
import React, { useState } from 'react';
import { db, auth, doc, setDoc } from '../firebaseConfig';

function QuestionAnswerForm() {
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    answer1: '',
    answer2: '',
    answer3: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, formData, { merge: true });
      alert('Daten erfolgreich gespeichert!');
    } else {
      alert('Du musst angemeldet sein, um Daten zu speichern.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Frage 1:</label>
        <input type="text" name="question1" value={formData.question1} onChange={handleChange} />
      </div>
      <div>
        <label>Antwort 1:</label>
        <input type="text" name="answer1" value={formData.answer1} onChange={handleChange} />
      </div>
      <div>
        <label>Frage 2:</label>
        <input type="text" name="question2" value={formData.question2} onChange={handleChange} />
      </div>
      <div>
        <label>Antwort 2:</label>
        <input type="text" name="answer2" value={formData.answer2} onChange={handleChange} />
      </div>
      <div>
        <label>Frage 3:</label>
        <input type="text" name="question3" value={formData.question3} onChange={handleChange} />
      </div>
      <div>
        <label>Antwort 3:</label>
        <input type="text" name="answer3" value={formData.answer3} onChange={handleChange} />
      </div>
      <button type="submit">Speichern</button>
    </form>
  );
}

export default QuestionAnswerForm;
