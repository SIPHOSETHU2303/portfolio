import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

// IMPORTANT: Your PDF must be inside: src/Assets/
import pdf from "../../Assets/CV_SIPHOSETHU.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

// PDF Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ====== TOP DOWNLOAD BUTTON ====== */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={pdf}
            download="CV_SIPHOSETHU.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload /> &nbsp;Download CV
            </Button>
          </a>
        </Row>

        {/* ====== PDF PREVIEW ====== */}
        <Row className="resume d-flex justify-content-center mt-4">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* ====== BOTTOM DOWNLOAD BUTTON ====== */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <a
            href={pdf}
            download="CV_SIPHOSETHU.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload /> &nbsp;Download CV
            </Button>
          </a>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
