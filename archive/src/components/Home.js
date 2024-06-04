import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Willkommen zur Frage und Antwort App</h1>
                    <p>Hier können Sie Ihre Fragen senden und Antworten erhalten.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
