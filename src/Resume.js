import React, {useState} from 'react'
import Modal from 'react-modal'
import { Document, Page } from "react-pdf/dist/entry.webpack";
import NeuButton2 from './components/NeuButton2';

function openPDF(pdf){
  window.open(pdf);
  return true;
}


function Resume() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
    <div>
      <header>
        <h1>Resume</h1><br></br><br></br>
      </header>
        <div id="resume" style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
        <Document file={require('./images/resume.pdf')}>
          <Page pageNumber={1}></Page>
        </Document>
        </div>
        <div style={{margin: 'auto', display: 'flex', justifyContent: 'center'}} ><NeuButton2 text="Download" onClick={()=>openPDF('./images/resume.pdf')}></NeuButton2></div>
        <br></br><br></br>
      </div>
    )
}

export default Resume;