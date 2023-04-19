import React from "react";
import { Container, Row } from "react-bootstrap";
import rough from "../public/assets/Rough.png";
import Image from "next/image";

const Component3 = () => {
  return (
    <Container>
      <Row>
        <Row>
          <div className="col-md-8 mt-5 pt-4">
            <h2 style={{ fontWeight: "700" }}>
              Sample of CDR report prepared by expert writers in compliance with
              MSA guidelines by Engineers Australia.
            </h2>
          </div>
          <div className="col-md-4 mt-5 pt-5">
            <input
              type="text"
              class="form-control"
              placeholder="Search ANZSCO Code you Want!"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </Row>
        <Row className="text-start">
          <div className="col-md-3 mt-4 text-start">
            <Row className="mt-2 text-start">
              <button type="button" class="btn text-start">
                ENGINEERING MANAGER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                CHEMICAL ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                CIVIL ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                MATERIALS ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                GEOTECHNICAL ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                STRUCTURAL ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                INDUSTRIAL ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                TRANSPORT ENGINEER
              </button>
            </Row>
            <Row className="mt-2">
              <button type="button" class="btn text-start">
                ELECTRICAL ENGINEER
              </button>
            </Row>
          </div>
          <div className="col-md-9 mb-5 pb-5 d-flex  justify-content-end">
            <div className="mt-5 mb-5 ">
              <div
                class="card border-0 ms-3  py-2 rounded-4 "
                style={{ width: "38rem" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">
                    ENGINEERING MANAGER
                  </h6>
                  <p>ANZSCO CODE:133211</p>

                  <button
                    className="btn btn-danger rounded-pill bg-white mt-3"
                    style={{ color: "red" }}
                  >
                    See Sample{" "}
                  </button>

                  <button className="btn btn-danger rounded-pill mt-3 ms-4">
                    Download Sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Component3;
