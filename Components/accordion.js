import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Accordions = () => {
  return (
    <Container>
      <div>
        <h2 className="title">dvsddfghnj</h2>
      </div>
      <Accordion
        defaultActiveKey="0"
        className="rounded-4"
        bsPrefix="faqAccordion"
      >
        <Accordion.Item eventKey="0" className="mt-3 mb-3 border-0 rounded-4 ">
          <Accordion.Header className=" rounded-5 ">
            <strong> Do I need to submit any academic projects?</strong>
          </Accordion.Header>
          <Accordion.Body className=" border-0 rounded-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="mt-3 mb-3 border-0 rounded-4">
          <Accordion.Header className="rounded-4">
            How much time does it takes for CDR to be delevered?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="mt-3 mb-3 border-0 rounded-4">
          <Accordion.Header className="rounded-4">
            Do I need to submit any academic projects?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3 mb-3 border-0 rounded-4" eventKey="3">
          <Accordion.Header className="rounded-4">
            Do I need to submit any academic projects?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="mt-3 mb-3 border-0 rounded-4">
          <Accordion.Header className=" border-0 rounded-4">
            Do I need to submit any academic projects?
          </Accordion.Header>
          <Accordion.Body className="border-0 rounded-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Accordions;
