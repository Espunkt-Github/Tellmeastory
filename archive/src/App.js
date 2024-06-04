import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Questions from './pages/Questions';
import Answers from './pages/Answers';
import axios from 'axios';
import GoogleSignIn from './components/GoogleSignIn';
import UserData from './components/UserData';
import LandingPage from './components/LandingPage';
 
function App() {
    return (
        <Router>
            <CssBaseline />
            <Navbar />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/questions" component={Questions} />
                    <Route path="/answers" component={Answers} />
                </Switch>
            </Container>
        </Router>
    );
}



function App() {
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
            <h1>Frage und Antwort App</h1>
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


export default App;
