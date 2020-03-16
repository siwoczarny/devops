import React from 'react';
import '../../styles/elements/Contact.scss';
//bootstrap
import { Col } from 'react-bootstrap';
//form
import Form from 'react-bootstrap/Form';
//buttons
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h3 className="contact_title">napisz do nas</h3>
            <div className="contact_form">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>imię*</Form.Label>
                            <Form.Control type="name" placeholder="Krystyna"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="Email">
                            <Form.Label>e-mail*</Form.Label>
                            <Form.Control type="email" placeholder="kryśka@gmail.com"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>jaki deadline?</Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <ToggleButtonGroup type="radio" name="deadline" defaultValue={3} className="contact_radio">
                            <ToggleButton value={1}>na wczoraj</ToggleButton>
                            <ToggleButton value={2}>szybko</ToggleButton>
                            <ToggleButton value={3}>spoko, mamy czas</ToggleButton>
                        </ToggleButtonGroup>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>kategoria</Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                            <ToggleButton value={1}><span>Checkbox 1</span></ToggleButton>
                            <ToggleButton value={2}>Checkbox 2</ToggleButton>
                            <ToggleButton value={3}>Checkbox 3</ToggleButton>
                            <ToggleButton value={2}>Checkbox 4</ToggleButton>
                            <ToggleButton value={2}>Checkbox 5</ToggleButton>
                            <ToggleButton value={2}>Checkbox 6</ToggleButton>
                            <ToggleButton value={2}>Checkbox 7</ToggleButton>
                            <ToggleButton value={2}>Checkbox 8</ToggleButton>
                            <ToggleButton value={2}>Checkbox 9</ToggleButton>
                        </ToggleButtonGroup>   
                    </Form.Row>
                    
                </Form>
            </div>
        </section>
    );
}
 
export default Contact;