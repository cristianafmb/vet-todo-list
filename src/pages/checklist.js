import React, { useEffect, useState } from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from "gatsby"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

import Layout from "../components/layout"
import Seo from "../components/seo"
import AnimalRegistration from "../components/animalRegistration";
import AddMedication from "../components/addMedication";
import AddVitalSignals from "../components/addVitalSignals";
import ExportDocument from "../components/exportDocument";

import ArrowRigth from '../images/right_arrow.inline.svg'
import ArrowRigthWithBorder from '../images/right_arrow_with_border.inline.svg'
import AddIcon from '../images/add.inline.svg'

import '../styles/checklist.scss'

const ChecklistPage = () => {
  const { t } = useTranslation()
  const datatChecklist = t("checklist", { returnObjects: true })

  const [step, setStep] = useState(0)
  const [animalName, setAnimalName] = useState("")
  const [animalAge, setAnimalAge] = useState("")
  const [animalWeight, setAnimalWeight] = useState("")
  const [documentToExport, setDocumentToExport] = useState("")
  const [medicationName, setMedicationName] = useState("")
  const [medicationDose, setMedicationDose] = useState(0)
  const [vitalSignals, setVitalSignals] = useState({
    FC: "",
    FR: "",
    SO2: "",
    CO2: "",
    PAM: ""
  })

  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  const date = new Date();

  const addTimeStamp = (step) => {
    setDocumentToExport(documentToExport + '\n' + date.getHours() + ':' + date.getMinutes() + '  ' + step)
    console.log(documentToExport)
  }

  useEffect(() => {
    if (document !== 'undefined') {
      var allInputsToCrossOut = document.getElementsByClassName('cross-out-text')
      if (allInputsToCrossOut) {
        if (allInputsToCrossOut.length > 0)
          for (const child of allInputsToCrossOut) {
            console.log(child)
            child.getElementsByClassName('form-check-input')[0].checked = true
          }
        else {
          allInputsToCrossOut.checked = true
        }
      }
    }
  }, [documentToExport]);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setShowToast(true)
    }, 1000 * 60 * 10);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [showToast]); 

  return (
    <Layout checklist setStep={setStep}>
      <Seo seo={datatChecklist.seo} />

      <div className="container-height">
        <div className="height-65vh">
          {step === 0 &&
            <>
              <AnimalRegistration data={datatChecklist.checklist.animal} animalName={animalName} setAnimalName={setAnimalName}
                animalAge={animalAge} setAnimalAge={setAnimalAge} animalWeight={animalWeight} setAnimalWeight={setAnimalWeight} />
              <div onClick={() => setStep(1)} className="container-arrow-next-step">
                <ArrowRigth />
              </div>
            </>
          }

          {step === 1 &&
            <Tabs
              defaultActiveKey="checklist"
              className="mb-3 raleway black fs-6"
            >
              <Tab eventKey="checklist" title={datatChecklist.checklist.tabs.checklist}>
                <Form>
                  <div className="mb-3">
                    {datatChecklist.checklist.steps.map((step, index) => (
                      <Form.Check // prettier-ignore
                        type='checkbox'
                        label={step}
                        key={'step' + index}
                        className={!documentToExport.includes(step) ? "raleway fs-6 mb-3" : "raleway fs-6 mb-3 cross-out-text "}
                        onClick={() => addTimeStamp(step)}
                      />
                    ))}
                  </div>
                  <div className="container-medication" onClick={() => (setStep(2), setMedicationDose(0), setMedicationName(''))}>
                    <p className="raleway fs-5 white">{datatChecklist.checklist.medication.add}</p>
                    <AddIcon />
                  </div>
                </Form>
              </Tab>
              <Tab eventKey="completed" title={datatChecklist.checklist.tabs.completed}>
                <span style={{ whiteSpace: "pre-line" }}>{documentToExport}</span>
              </Tab>
            </Tabs>
          }

          {step === 2 &&
            <AddMedication data={datatChecklist.checklist.medication} documentToExport={documentToExport}
              setDocumentToExport={setDocumentToExport} date={date} setStep={setStep} medicationName={medicationName}
              setMedicationName={setMedicationName} medicationDose={medicationDose} setMedicationDose={setMedicationDose} />
          }
          {step === 3 &&
            <AddVitalSignals data={datatChecklist.checklist.vitalsignals} documentToExport={documentToExport}
              setDocumentToExport={setDocumentToExport} date={date} setStep={setStep}
              vitalSignals={vitalSignals} setVitalSignals={setVitalSignals} />
          }
          {step === 4  &&
            <ExportDocument documentToExport={documentToExport} data={datatChecklist.checklist.export} animalName={animalName}/>
          }
        </div>

        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <strong className="me-auto fs-6 raleway">{datatChecklist.checklist.vitalsignals.title}</strong>
          </Toast.Header>
          <Toast.Body className="d-flex" onClick={() => (setStep(3), setShowToast(false), setVitalSignals({
            FC: "",
            FR: "",
            SO2: "",
            CO2: "",
            PAM: ""
          }))}>
            <p className="fs-6 raleway white me-4">{datatChecklist.checklist.vitalsignals.affirmative}</p>
            <ArrowRigthWithBorder />
          </Toast.Body>
        </Toast>
      </div>
    </Layout>
  )
}

export default ChecklistPage


export const QueryChecklistPT = graphql`
  query($language: String!) {
    locales: allLocale(filter: { ns: { in: [ "checklist"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`