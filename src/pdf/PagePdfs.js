import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

import PdfBody from './PdfBody.js'

const PagePdfs = () => {
  return (
    <PDFViewer>
        <PdfBody />
    </PDFViewer>
  )
}

ReactDOM.render(<PagePdfs />, document.getElementById('root'));