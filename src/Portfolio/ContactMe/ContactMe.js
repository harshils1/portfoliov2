import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import './ContactMe.css';

export default function ContactMe() {
    return (
        <div>
        <Card>
            <Card.Body>
                <h2>Contact Me</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message: </Form.Label>
                        <Form.Control required></Form.Control>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </div>
    );
}