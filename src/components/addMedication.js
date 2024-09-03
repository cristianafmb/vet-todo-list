import * as React from "react"

import Form from 'react-bootstrap/Form';

import AddIcon from '../images/add.inline.svg'

const AddMedication = ({ data, documentToExport, setDocumentToExport, date, setStep, medicationName, setMedicationName,
    medicationDose, setMedicationDose }) => {


    const addTimeStamp = () => {
        console.log()
        setDocumentToExport(documentToExport + '\n' 
            + date.getHours() + ':' + date.getMinutes() + '  '
            + medicationName + ' - ' + medicationDose
            + '(mg)')
        setStep(1)
    }

    return (
        <div className="container-add-medication">
            <h3 className="raleway fs-3">{data.add}</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>{data.fields.titleName}</Form.Label>
                    <Form.Control type="text" name="medication" defaultValue={medicationName} required
                        onChange={(e) => {
                            setMedicationName(e.target.value);
                        }}
                        onSelect={(e) => {
                            setMedicationName(e.target.value);
                        }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>{data.fields.titleDose}</Form.Label>
                    <Form.Control type="number" name="dose" defaultValue={medicationDose} required step=".001"
                        onChange={(e) => {
                            setMedicationDose(e.target.value);
                        }}
                        onSelect={(e) => {
                            setMedicationDose(e.target.value);
                        }} />
                </Form.Group>
                <div className="container-add-icon" onClick={() => addTimeStamp()}>
                    <AddIcon />
                </div>
            </Form>
        </div>
    )
}

export default AddMedication
