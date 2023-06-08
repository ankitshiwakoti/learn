import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const Testimonials = ({ data }) => {
  return (
    <Container className="mb-5">
      <Row className="text-center py-2">
        <h2 style={{ fontWeight: "700" }}>Client Testimonials</h2>
        <p className="mt-3">
          we are proud of any thing orem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum
          lacus finibus nec. Proin vulputate odio quam. Proin vulputate odio
          quam{" "}
        </p>
      </Row>
      <Row className="text-center d-flex justify-content-center align-items-center ">
        {data?.map((items) => (
          <div class="col-md-4  py-2">
            <div className="ms-4 ">
              <div
                class="card rounded-4 rounded border-0"
                style={{ backgroundColor: "#d7b1ad" }}
              >
                <img
                  class="card-img-top img-circle rounded-circle"
                  src="https://dummyimage.com/100x100/000/fff"
                  alt="Card image cap"
                />
                <div className="card-top text-start  ">
                  <h6
                    className="mb-0 text-capitalize "
                    style={{ fontWeight: "600" }}
                  >
                    {items.name}
                  </h6>
                  <p className=" text-capitalize">{items.country}</p>
                </div>

                <div class="card-block  mb-5 pb-3">
                  <p class="card-text fw-normal ">{items.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
      <Row className="py-2">
        <div class=" d-flex align-items-center justify-content-center  mt-5 pt-5">
          <button
            type="button"
            class="btn btn-secondary rounded-pill ps-3 p-2 pe-3"
            style={{ backgroundColor: "#960112" }}
          >
            Check all Reviews
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default Testimonials;
