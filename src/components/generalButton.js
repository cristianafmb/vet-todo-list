import * as React from "react"
import { Link } from "gatsby"

import ArrowRigth from '../images/right_arrow.inline.svg'

const GeneralButton = ({ text, link }) => (
    <div className="general-button-container raleway m-auto">
        <Link to={link} className="text-decoration-none general-button">
            
                <p className="fs-6 raleway white">{text}</p>
                
                <ArrowRigth />
            
        </Link>
    </div>
)

export default GeneralButton
