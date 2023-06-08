import React from "react";
import { Container, Row } from "react-bootstrap";
import SMT from "../public/assets/SMT.png";
import Image from "next/image";
import { useWindowSize } from "react-use";

const Suscribe = () => {
  const { width } = useWindowSize();
  console.log(width);
  // const width
  return (
    <section style={{ backgroundColor: "pink" }}>
      <Container className=" ">
        <Row className="pt-5">
          <div>
            <div className="col-md-12 col-md-12 d-flex align-items-center justify-content-center pt-3">
              <Image src={SMT} alt="image" className="img-fluid" width={300} />
            </div>
            <div className=" d-flex align-items-center justify-content-center pt-5">
              <div
                className="col-9 ms-md-5 ps-md-5   p-0 "
                style={{
                  width: `${width}` > 769 ? "30%" : "50%",
                }}
              >
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
              <div className="col-3">
                <button
                  type="button"
                  class="btn btn-danger border-0  "
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
    </section>
  );
};

export default Suscribe;
