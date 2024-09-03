import * as React from "react"
import { Link } from "gatsby"
import CorrectIcon from '../images/correct.inline.svg'


const Header = ({ checklist, setStep }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `0 var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      height: '15vh'
    }}
  >
    <Link
      to="/"
      className="raleway text-decoration-none blueTitle fs-1"
    >
      Todo<span className="satisfy-regular">Vet</span>
    </Link>

    {checklist &&
      <div className="container-correct-icon" onClick={() => setStep(4)}>
        <CorrectIcon/>
      </div>}

  </header>
)

export default Header
