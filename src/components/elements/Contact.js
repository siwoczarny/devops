import React from 'react';
import '../../styles/elements/Contact.scss';
//bootstrap
import { Col } from 'react-bootstrap';
//form
import Form from 'react-bootstrap/Form';
//buttons
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'

function handleClickSubmit() {
    alert('Wysłano formularz!')
}

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
                        <ToggleButtonGroup as={Col} type="radio" name="deadline" defaultValue={3} className="contact_radio">
                            <ToggleButton value={1}>na wczoraj</ToggleButton>
                            <ToggleButton value={2}>szybko</ToggleButton>
                            <ToggleButton value={3}>spoko, mamy czas</ToggleButton>
                        </ToggleButtonGroup>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>w czym możemy pomóc?</Form.Label>
                            <Form.Control as="textarea" rows="10" placeholder="Krystyn reet commodo, tincidunt vel, velit. Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orci."/>
                            <Form.Check id="checbox-accept" label="Akceptuję... *" aria-label="accept"/>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" className="btn-send" onClick={handleClickSubmit}>Wysyłam</Button>
                </Form>
            </div>
        </section>
    );
}
 
export default Contact;