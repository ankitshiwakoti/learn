import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import rough from "../public/assets/Rough.png";
import Image from "next/image";

const Component3 = ({ data }) => {
  const [active, setActive] = useState(data[0]?.title);
  const [code, setCode] = useState(data[0]?.CODE);

  return (
    <Container>
      <section>
        <Row className=" ">
          <div className="col-md-8 mt-5 pt-4">
            <h2 style={{ fontWeight: "700" }}>
              Sample of CDR report prepared by expert writesssrs in compliance
              with MSA guidelines by Engineers Australia.
            </h2>
          </div>
          <div className="col-md-4  d-flex align-items-center text-center justify-content-center">
            <input
              type="text"
              placeholder="Search ANZSCO Code you Want!"
              aria-label="Example text with button addon"
              className="form-control border rounded-0 rounded-start border-black border-end-0 "
              id="basic-url1"
              aria-describedby="basic-addon3"
            />

            <Button
              className="btn btn-primary   border rounded-0 rounded-end border-black border-start-0"
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "-2px",
              }}
            >
              <i class="bi bi-search "> </i>
            </Button>
          </div>
        </Row>
        <Row className="text-start">
          <div className="col-md-3 mt-4 text-start anyClass">
            {data?.map((items) => (
              <Row className="mt-2 text-start" key={items?.title}>
                <button
                  type="button"
                  className={`btn text-start border-0 ${
                    active === items?.title ? "fw-bold " : "text-black "
                  }`}
                  onClick={() => {
                    setActive(items?.title), setCode(items?.CODE);
                  }}
                >
                  {items?.title}
                </button>
              </Row>
            ))}
          </div>
          <div className="col-md-9 mb-5 pb-5 d-flex  justify-content-center">
            <div
              class="card border-0 ms-3  py-2 rounded-4 mt-5 mb-5 "
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
                <h6 class="card-title text-center mt-2">{active}</h6>
                <p>
                  ANZSCO CODE: <span className="fw-bold">{code} </span>
                </p>

                <button
                  className="btn btn-danger rounded-pill bg-white mt-3"
                  style={{ color: "red" }}
                >
                  See Sample
                </button>

                <button className="btn btn-danger rounded-pill mt-3 ms-4">
                  Download Sample
                </button>
              </div>
            </div>
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Component3;
