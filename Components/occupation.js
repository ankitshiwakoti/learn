import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import rough from "../public/assets/Rough.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Occupation = ({ data }) => {
  const [active, setActive] = useState(data[0]?.group);
  const [title1, setTitle1] = useState(data[0]?.title1);
  const [code1, setCode1] = useState(data[0]?.code1);
  const [title2, setTitle2] = useState(data[0]?.title2);
  const [code2, setCode2] = useState(data[0]?.code2);
  const [title3, setTitle3] = useState(data[0]?.title3);
  const [code3, setCode3] = useState(data[0]?.code3);
  const [title4, setTitle4] = useState(data[0]?.title4);
  const [code4, setCode4] = useState(data[0]?.code4);
  const [title5, setTitle5] = useState(data[0]?.title5);
  const [code5, setCode5] = useState(data[0]?.code5);
  const [title6, setTitle6] = useState(data[0]?.title6);
  const [code6, setCode6] = useState(data[0]?.code6);
  const [title7, setTitle7] = useState(data[0]?.title7);
  const [code7, setCode7] = useState(data[0]?.code7);
  const [title8, setTitle8] = useState(data[0]?.title8);
  const [code8, setCode8] = useState(data[0]?.code8);

  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }

  return (
    <Container className="mt-5">
      <Row>
        <div className="col-md-8">
          <h2 style={{ fontWeight: "700" }}>ANZSCO Occupation List</h2>
          <h6 style={{ fontWeight: "500" }}>
            Search from the list of ANZSCO skilled occupation names for
            population Engineering professions in Australia..
          </h6>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-cener">
          <input
            type="text"
            placeholder="Search ANZSCO Code you want!"
            className="form-control border rounded-0 rounded-start border-end-0 border-black"
          />
          <Button
            className="btn btn-primary border rounded-0 rounded-end border-black border-start-0"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <i class="bi bi-search "> </i>
          </Button>
        </div>
      </Row>
      <Row className="mt-5 mb-5">
        <div className="col-md-3 text-start anyClass">
          {data?.map((items) => (
            <Row className="mt-2 text-start" key={items?.id}>
              <button
                type="button"
                className={`btn text-start border-0 ${
                  active === items?.group ? "fw-bold " : "text-black"
                }`}
                onClick={() => {
                  setActive(items?.group),
                    setTitle1(items?.title1),
                    setCode1(items?.code1),
                    setTitle2(items?.title2),
                    setCode2(items?.code2),
                    setTitle3(items?.title3),
                    setCode3(items?.code3),
                    setTitle4(items?.title4),
                    setCode4(items?.code4),
                    setTitle5(items?.title5),
                    setCode5(items?.code5),
                    setTitle6(items?.title6),
                    setCode7(items?.code7),
                    setTitle8(items?.title8),
                    setCode8(items?.code8);
                }}
              >
                {items?.group}
              </button>
            </Row>
          ))}
        </div>
        <div className="col-md-9 mb-5 anyClass">
          <Row>
            <div className="col-md-6">
              <div class="card border-0  rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2 text-uppercase">
                    {title1}
                  </h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code1} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code1)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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

            <div className="col-md-6">
              <div class="card border-0 rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title2}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code2} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code2)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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

            <div className="col-md-6">
              <div class="card border-0 ms-3  rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title3}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code3} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code3)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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

            <div className="col-md-6">
              <div class="card border-0  rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title4}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code4} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code4)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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

            <div className="col-md-6">
              <div class="card border-0  rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title5}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code5} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code5)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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
            <div className="col-md-6">
              <div class="card border-0 rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title6}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code6} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code6)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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
            <div className="col-md-6">
              <div class="card border-0 rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title7}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code7} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code7)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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

            <div className="col-md-6">
              <div class="card border-0 rounded-4 mt-5 mb-5 ">
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={rough}
                    className="img-fluid"
                    height={150}
                    alt="image"
                  />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-center mt-2">{title8}</h6>
                  <p>
                    ANZSCO CODE: <span className="fw-bold">{code8} </span>
                    <button
                      className="border-0 bg-white"
                      onClick={() => copyText(code8)}
                    >
                      <i class="bi bi-journals"></i>
                    </button>
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
        </div>
      </Row>
    </Container>
  );
};

export default Occupation;
