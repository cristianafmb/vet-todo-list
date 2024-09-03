import * as React from "react"
import FileSaver from 'file-saver';

import ExportPerson from '../images/export_person.inline.svg'
import ShareIcon from '../images/share.inline.svg'

const ExportDocument = ({ data, documentToExport, animalName }) => {

    function downloadPDF(documentToExport) {
        var blob = new Blob([documentToExport], { type: "text/plain;charset=utf-8" });
        console.log(blob)
        FileSaver.saveAs(blob, animalName+'.txt');
    }

    return (
        <div className="container-export-document">
            <h3 className="raleway fs-3">{data.title}</h3>
            <div className="justificy-itens-center text-center m-auto">
                <ExportPerson />
            </div>
            <div className="mt-5 m-auto d-flex container-share-button justify-content-center" onClick={() => downloadPDF(documentToExport)}>
                <h4 className="raleway fs-4 me-4">{data.sharebutton}</h4>
                <ShareIcon />
            </div>

        </div>
    )
}

export default ExportDocument
