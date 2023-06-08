import Image from "next/image";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import fot from "../public/assets/fot.png";

const Footer = () => {
  return (
    <section style={{ backgroundColor: "#eeefef" }}>
      <Container className="mb-5">
        <Row>
          <div className="col-md-3 mt-5">
            <Image src={fot} alt="photo" className="img-fluid" />
            <h5 className="mt-2"> Who we are</h5>
            <p>
              CDR skill assesment help is not associated or endorsed by
              Engineers Australia. The Services we provide should be used for
              guidline purpose only or to be used to make your own reports as
              per your need.
            </p>
            <h5 className="mt-2"> Request a Sample</h5>
            <div className="col-md-12 mt-3  d-flex align-items-center text-center justify-content-center">
              <Button
                className="btn btn-primary pe-0  border rounded-0  border-0 border-end-0"
                style={{ backgroundColor: "#cccccd", color: "#970012" }}
              >
                <i class="bi bi-envelope"></i>
              </Button>
              <input
                type="text"
                placeholder=" Drop your Mail"
                aria-label="Example text with button addon"
                className="form-control border-0 rounded-0  ps-0  border-end-0 "
                id="basic-url1"
                aria-describedby="basic-addon3"
                style={{ backgroundColor: "#cccccd" }}
              />

              <Button
                className="btn btn-primary border-0  rounded-0   border-start-0"
                style={{
                  backgroundColor: "#970012",
                  color: "white",
                  marginLeft: "-2px",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="col-md-3 lh-lg mt-5 ">
            <h2 className="mt-3 mb-3">Our Services</h2>
            <p className="m-0">CDR Writing</p>
            <p className="m-0">Career Episode Writing</p>
            <p className="m-0">Summary Statement Writing</p>
            <p className="m-0">Stage 1 Compttency Assessment</p>
            <p className="m-0">Stage 2 Compttency Assessment</p>
            <p className="m-0">CDR Reviewing</p>
            <p className="m-0">CPD Writing</p>
            <p className="m-0">CDR Plagiarism Checking & Removal</p>
            <p className="m-0">Resume Writing</p>
          </div>
          <div className="col-md-3 lh-lg mt-5">
            <h2 className="mt-3 mb-3">Important Links</h2>
            <p className="m-0">Contact Us</p>
            <p className="m-0">BLog</p>
            <p className="m-0">Meet Our Advisor</p>
            <p className="m-0">Order Now</p>
            <p className="m-0">Disclaimer</p>
            <p className="m-0">Privacy Policy</p>
            <p className="m-0">Refund Policy</p>
          </div>
          <div className="col-md-3  lh-lg mt-5">
            <div className="">
              <h2 className="mt-3 mb-3">Contact Us</h2>
            </div>
            <div className=" ">
              <p className="m-0">
                <i class="bi bi-geo-alt"> </i>

                <span className="ms-3 ">Canberra, Australia</span>
              </p>
            </div>

            <div className=" d-flex">
              <div className="">
                <i class="bi bi-envelope "> </i>
              </div>
              <div className="ms-4">
                <p className="m-0">
                  <span className="">info@cdrskillassessmenthelp.com</span>
                </p>
              </div>
            </div>
            <div className=" ">
              <p className="m-0">
                {" "}
                <i class="  bi bi-telephone-fill"></i>
                <span className="ms-3"> +61482072481 </span>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
