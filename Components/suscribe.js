import React from "react";
import { Container, Row } from "react-bootstrap";
import SMT from "../public/assets/SMT.png";
import Image from "next/image";

const Suscribe = () => {
  return (
    <Container className=" ">
      <Row className="pt-5">
        <div className="col-md-12 ">
          <div className="col-md-12 col-md-12 d-flex align-items-center justify-content-center pt-3">
            <Image src={SMT} alt="image" className="img-fluid" width={300} />
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-center pt-5">
            <div className="col-md-9 col-sm-12 w-25 ms-5  padding-0">
              <div class="input-group my-3 ms-5 border border-0 padding-0">
                <input
                  type="text"
                  class="form-control border border-0 "
                  placeholder="Enter your name"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  style={{
                    height: "60px",
                    backgroundColor: "#c4b8ba",
                    borderRadius: "0px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-2 col-sm-12 ms-5 padding-0  ">
              <button
                type="button"
                class="btn btn-danger border-0"
                style={{ height: "60px", borderRadius: "0px" }}
              >
                SUBMIT
              </button>
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-center pt-5  text-center">
            <h2 style={{ fontWeight: "700" }}>
              Save time.Save Money. Give us an Opportunity
            </h2>
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-center pt-3 text-center mb-5">
            <p style={{ color: "#495e49" }}>
              Explore our CDR services with a 100% approval rate. Get your
              quality CDR report prepared by our experienced writters from
              various field of engenerring.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Suscribe;
