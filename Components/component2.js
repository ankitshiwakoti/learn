import Image from "next/image";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import weak from "../public/assets/weak.png";
import insuf from "../public/assets/Insuf.png";
import rough from "../public/assets/Rough.png";
import risk from "../public/assets/Risk.png";

const Component2 = () => {
  return (
    <Container className=" ">
      <Row className="text-center  ">
        <Row className="mt-5 text-center ">
          <h2 style={{ fontWeight: "700" }}>
            Why do you need a CDR Assessment Help Advice?
          </h2>
        </Row>
        <Row className="mt-3 text-center ">
          <p>
            Positive skill assignment of CDR depends on various factors while
            writing . most of all presentation of engerring skills and knowledge
            in the right format and structure is importent.
          </p>
        </Row>
        <Row className=" mt-2 d-flex align-items-center justify-content-center ">
          <Button
            className="btn  rounded-pill border-0  "
            style={{
              width: "80px",
              backgroundColor: "#950718",
              fontSize: "14px",
            }}
          >
            Hire Us
          </Button>
        </Row>
        <Row className="mb-5">
          <div className="col-md-3  mt-4 col-sm-6 ">
            <div
              class="card border-0 ms-3 py-2 rounded-4"
              style={{ backgroundColor: "#f4e6e9" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Image src={weak} className="img-fluid" alt="image" />
              </div>
              <div class="card-body">
                <h6 class="card-title">Weak Project Solution</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3  mt-4 col-sm-6  ">
            <div
              class="card border-0 ms-3 py-2 rounded-4"
              style={{ backgroundColor: "#f4e6e9" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Image src={insuf} className="img-fluid" alt="image" />
              </div>
              <div class="card-body">
                <h6 class="card-title">Insufficent Report Content</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3  mt-4 col-sm-6  ">
            <div
              class="card border-0 ms-3  py-2 rounded-4 "
              style={{ backgroundColor: "#f4e6e9" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  src={rough}
                  className="img-fluid"
                  height={150}
                  alt="image"
                />
              </div>
              <div class="card-body">
                <h6 class="card-title text-center">
                  Rough Report Structure & Format
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3  mt-4 col-sm-6  ">
            <div
              class="card border-0 ms-3 py-2 rounded-4 "
              style={{ backgroundColor: "#f4e6e9" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Image src={risk} className="img-fluid" alt="image" />
              </div>
              <div class="card-body">
                <h6 class="card-title">Risk of Plagarism</h6>
              </div>
            </div>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Component2;
