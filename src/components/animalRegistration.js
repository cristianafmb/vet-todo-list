import * as React from "react"

import Form from 'react-bootstrap/Form';

const AnimalRegistration = ({ data, animalName, setAnimalName, animalAge, setAnimalAge, animalWeight, setAnimalWeight }) => {

    return (
        <div className="container-animal-registration">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>{data.name}</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={animalName} required
                        onChange={(e) => {
                            setAnimalName(e.target.value);
                        }}
                        onSelect={(e) => {
                            setAnimalName(e.target.value);
                        }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>{data.age}</Form.Label>
                    <Form.Control type="number" name="age" defaultValue={animalAge} min="1" max="40" required
                        onChange={(e) => {
                            setAnimalAge(e.target.value);
                        }}
                        onSelect={(e) => {
                            setAnimalAge(e.target.value);
                        }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>{data.weight}</Form.Label>
                    <Form.Control type="number" name="weight" defaultValue={animalWeight} min="1" max="90" step=".01" required
                        onChange={(e) => {
                            setAnimalWeight(e.target.value);
                        }}
                        onSelect={(e) => {
                            setAnimalWeight(e.target.value);
                        }} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default AnimalRegistration
