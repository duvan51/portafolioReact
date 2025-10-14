import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfViewer() {
  return (
    <div style={{ height: '750px', border: '1px solid red' }}>
      <Worker workerUrl="/pdf.worker.min.js">
        <Viewer fileUrl="/cvReComprimida.pdf" />
      </Worker>
    </div>
  );
}