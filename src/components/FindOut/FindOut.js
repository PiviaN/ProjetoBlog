import React from "react";
import "./FindOut.css";
import dots2 from "../../assets/dots-2.png";

function FindOut() {
  return (
    <>
      <section className="find-out find-out-desktop d-flex align-items-center ">
        <div
          id="carouselExampleAutoPlaying"
          className="carousel container-custom-desktop slide no-container-mobile"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active no-container-mobile">
              <div className="d-flex flex-column">
                <div className="control-title">
                  <h1 className="title">para e-commerce & marketplace 1</h1>
                </div>

                <div className="control-description">
                  <p className="description">
                    lorem Ipsum 1 dolor sit amet. Et sequi perferendis At
                    molestiae numquam et itaque accusamus id quia adipisci.
                  </p>
                </div>

                <button className="button-get-to-know mt-3">
                  <p className="p-button">Conheça todas</p>
                </button>

                <div className="d-flex justify-content-center mt-5">
                  <img src={dots2} alt="slide-dots" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column">
                <div className="control-title">
                  <h1 className="title">para e-commerce & marketplace 2</h1>
                </div>

                <div className="control-description">
                  <p className="description">
                    lorem Ipsum 1 dolor sit amet. Et sequi perferendis At
                    molestiae numquam et itaque accusamus id quia adipisci.
                  </p>
                </div>

                <button className="button-get-to-know mt-3">
                  <p className="p-button">Conheça todas</p>
                </button>

                <div className="d-flex justify-content-center mt-5">
                  <img src={dots2} alt="slide-dots" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column">
                <div className="control-title">
                  <h1 className="title">para e-commerce & marketplace 3</h1>
                </div>

                <div className="control-description">
                  <p className="description">
                    lorem Ipsum 1 dolor sit amet. Et sequi perferendis At
                    molestiae numquam et itaque accusamus id quia adipisci.
                  </p>
                </div>

                <button className="button-get-to-know mt-3">
                  <p className="p-button">Conheça todas</p>
                </button>

                <div className="d-flex justify-content-center mt-5">
                  <img src={dots2} alt="slide-dots" />
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev d-none"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="find-out-mobile d-flex align-items-center justify-content-center">
        <div
          id="carouselExampleAutoPlaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active no-container-mobile">
              <div className="d-flex flex-column">
                <div className="control-title">
                  <h1 className="title">para e-commerce & marketplace 1</h1>
                </div>

                <div className="control-description">
                  <p className="description">
                    lorem Ipsum 1 dolor sit amet. Et sequi perferendis At
                    molestiae numquam et itaque accusamus id quia adipisci.
                  </p>
                </div>

                <button className="button-get-to-know mt-3">
                  <p className="p-button">Conheça todas</p>
                </button>

                <div className="d-flex justify-content-center mt-5">
                  <img src={dots2} alt="slide-dots" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column">
                <div className="control-title">
                  <h1 className="title">para e-commerce & marketplace 2</h1>
                </div>

                <div className="control-description">
                  <p className="description">
                    lorem Ipsum 1 dolor sit amet. Et sequi perferendis At
                    molestiae numquam et itaque accusamus id quia adipisci.
                  </p>
                </div>

                <button className="button-get-to-know mt-3">
                  <p className="p-button">Conheça todas</p>
                </button>

                <div className="d-flex justify-content-center mt-5">
                  <img src={dots2} alt="slide-dots" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column">
                <div className="control-title">
                  <h1 className="title">para e-commerce & marketplace 3</h1>
                </div>

                <div className="control-description">
                  <p className="description">
                    lorem Ipsum 1 dolor sit amet. Et sequi perferendis At
                    molestiae numquam et itaque accusamus id quia adipisci.
                  </p>
                </div>

                <button className="button-get-to-know mt-3">
                  <p className="p-button">Conheça todas</p>
                </button>

                <div className="d-flex justify-content-center mt-5">
                  <img src={dots2} alt="slide-dots" />
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev d-none"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default FindOut;
