import React from "react";
import { Container, Row } from "react-bootstrap";

const Member = ({ data }) => {
  return (
    <section className="mb-4" style={{ backgroundColor: "" }}>
      {data?.map((items, index) => (
        <>
          {" "}
          {index % 2 === 0 ? (
            <Row className=" mb-5">
              <div className="  d-flex mt-4">
                <div
                  className="col-md-1"
                  style={{ backgroundColor: "#fef5f6" }}
                ></div>
                <div
                  className="col-md-9 text-start p-4"
                  style={{ backgroundColor: "#fef5f6" }}
                >
                  <h2 className="mt-4 mb-4">{items.title}</h2>
                  <p>{items.body1}</p>
                  <p>{items.body2}</p>
                </div>
              </div>
            </Row>
          ) : (
            <Row className=" ">
              <div className="  d-flex flex-row-reverse ">
                <div
                  className="col-md-1"
                  style={{ backgroundColor: "#fef5f6" }}
                ></div>
                <div
                  className="col-md-9 p-4 "
                  style={{ backgroundColor: "#fef5f6" }}
                >
                  <h2 className="mt-4 mb-4">{items.title}</h2>
                  <p className="mt-4 mb-4">{items.body1} </p>

                  <p className="mt-4 mb-4">{items.body2}</p>
                </div>
              </div>
            </Row>
          )}
        </>
      ))}
    </section>
  );
};

export default Member;
