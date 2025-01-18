import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdf from "../../Assets/SureshParimi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume-viewer">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber} scale={1.5} />
          </Document>
        </Row>

        <Row className="resume-controls">
          <div className="navigation-controls">
            <Button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="nav-button"
            >
              <FaArrowLeft /> Previous
            </Button>
            <p className="page-info">
              Page {pageNumber} of {numPages}
            </p>
            <Button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="nav-button"
            >
              Next <FaArrowRight />
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Resume; 