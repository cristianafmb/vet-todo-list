import * as React from "react"

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddIcon from '../images/add.inline.svg'

const AddVitalSignals = ({ data, date, documentToExport, setDocumentToExport, vitalSignals, setVitalSignals, setStep }) => {


    const addTimeStamp = () => {
        console.log(vitalSignals.CO2)
        setDocumentToExport(documentToExport + '\n'
            + date.getHours() + ':' + date.getMinutes()
            + '   FC: ' + vitalSignals.FC
            + ' FR: ' + vitalSignals.FR
            + ' SO2: ' + vitalSignals.SO2
            + ' CO2: ' + vitalSignals.CO2
            + ' PAM: ' + vitalSignals.PAM
            + '  ')
        setStep(1)
    }

    return (
        <div className="container-add-medication">
            <h3 className="raleway fs-3">{data.subtitle}</h3>
            <Form>
                <div className="d-grid two-columns">
                    <Form.Group className="mb-3">
                        <Form.Label>{data.FC}</Form.Label>
                        <Form.Control type="text" name={data.FC} id={data.FC} defaultValue={vitalSignals.FC} required
                            onChange={(e) => {
                                setVitalSignals({ ...vitalSignals, 'FC': e.target.value });
                            }}
                            onSelect={(e) => {
                                setVitalSignals({ ...vitalSignals, 'FC': e.target.value });
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>{data.FR}</Form.Label>
                        <Form.Control type="text" name={data.FR} id={data.FR} defaultValue={vitalSignals.FR} required
                            onChange={(e) => {
                                setVitalSignals({ ...vitalSignals, 'FR': e.target.value });
                            }}
                            onSelect={(e) => {
                                setVitalSignals({ ...vitalSignals, 'FR': e.target.value });
                            }} />
                    </Form.Group>
                </div>
                <div className="d-grid two-columns">
                    <Form.Group className="mb-3">
                        <Form.Label>{data.SO2}</Form.Label>
                        <Form.Control type="text" name={data.SO2} id={data.SO2} defaultValue={vitalSignals.SO2} required
                            onChange={(e) => {
                                setVitalSignals({ ...vitalSignals, 'SO2': e.target.value });
                            }}
                            onSelect={(e) => {
                                setVitalSignals({ ...vitalSignals, 'SO2': e.target.value });
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>{data.CO2}</Form.Label>
                        <Form.Control type="text" name={data.CO2} id={data.CO2} defaultValue={vitalSignals.CO2} required
                            onChange={(e) => {
                                setVitalSignals({ ...vitalSignals, 'CO2': e.target.value });
                            }}
                            onSelect={(e) => {
                                setVitalSignals({ ...vitalSignals, 'CO2': e.target.value });
                            }} />
                    </Form.Group>
                </div>
                <div className="d-grid two-columns">
                    <Form.Group className="mb-3">
                        <Form.Label>{data.PAM}</Form.Label>
                        <Form.Control type="text" name={data.PAM} id={data.PAM} defaultValue={vitalSignals.PAM} required
                            onChange={(e) => {
                                setVitalSignals({ ...vitalSignals, 'PAM': e.target.value });
                            }}
                            onSelect={(e) => {
                                setVitalSignals({ ...vitalSignals, 'PAM': e.target.value });
                            }} />
                    </Form.Group>
                    <div />
                </div>
                <div className="container-add-icon" onClick={() => addTimeStamp()}>
                    <AddIcon />
                </div>
            </Form>
        </div>
    )
}

export default AddVitalSignals
