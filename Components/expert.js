import Image from "next/image";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import profile from "../public/assets/profile.png";

const Expert = ({ data }) => {
  return (
    <Container>
      <Row className="mb-5">
        {data?.map((items) => (
          <div className="col-md-4 col-sm-6 col-12  " key={items.id}>
            <div className=" ms-2">
              <div
                class="card ms-2 d-flex justify-content-evenly align-items-center rounded-4 p-0  "
                style={{
                  backgroundColor: "#fef5f6",
                  borderTop: " 10px solid #970113",
                  borderBottom: " 10px solid #970113",
                  boxShadow: " 2px 4px 6px -2px black",
                }}
              >
                <div
                  className="rounded-circle mt-3 border-3"
                  style={{
                    width: "6rem",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    borderColor: "#970113",
                  }}
                >
                  <img
                    src="https://dummyimage.com/100x100/000/fff"
                    class=" img-fluid rounded-circle border-0"
                    alt="img"
                    style={{ borderRadius: "50%", borderColor: "#970113" }}
                  />
                </div>
                <div class="card-body  text-center ">
                  <h5
                    class="card-title text-capitalize"
                    style={{ color: " #970113", fontWeight: "700" }}
                  >
                    {items.name}
                  </h5>
                  <p className="mb-0" style={{ color: " #970113" }}>
                    {items.role}
                  </p>
                </div>
                <div className="d-flex  mb-3">
                  <div
                    className="rounded-circle  p-2  "
                    style={{
                      backgroundColor: "#970113",
                      color: "#970113",
                    }}
                  >
                    <i
                      class="bi bi-facebook  "
                      style={{ color: "white", backgroundColor: "#970113" }}
                    ></i>
                  </div>
                  <div
                    className=" p-2 ms-2 rounded-circle   "
                    style={{
                      backgroundColor: "#970113",
                      color: "#970113",
                    }}
                  >
                    <i
                      class="bi bi-instagram rounded-circle  "
                      style={{ color: "white", backgroundColor: "#970113" }}
                    ></i>
                  </div>
                  <div
                    className="rounded-circle p-2 ms-2 "
                    style={{
                      backgroundColor: "#970113",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  >
                    <i
                      class="bi bi-linkedin rounded-circle  "
                      style={{ color: "white", backgroundColor: "#970113" }}
                    ></i>
                  </div>
                </div>

                <div className="w-75  mb-3">
                  <Button
                    className="border-0 w-100 mx-auto"
                    style={{
                      backgroundColor: "#970113",
                      color: "white",
                    }}
                  >
                    Talk with {items.button}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Expert;
