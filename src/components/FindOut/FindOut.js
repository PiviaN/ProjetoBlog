import React from "react";
import "./FindOut.css";
import dots2 from "../../assets/dots-2.png";
import { useEffect } from "react";

function FindOut() {
  const changeSlide = () => {
    const carouselItemOne = document.querySelector(".carousel-control-next");
    const carouselItemTwo = document.querySelector(".carousel-item-2");
    const carouselItemThree = document.querySelector(".carousel-item-3");
    setInterval(() => {
      carouselItemOne.addEventListener("click", () => {
        console.log("one");
      });
    }, 2000);
  };

  useEffect(() => {
    changeSlide();
  });

  return (
    <div className="find-out">
      <div
        id="carouselExampleAutoPlaying"
        className="carousel slide container w-auto-mobile"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active container">
            <div className="d-flex flex-column w-100">
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
          <div className="carousel-item container">
            <div className="d-flex flex-column w-100">
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
          <div className="carousel-item container">
            <div className="d-flex flex-column w-100">
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
    </div>
  );
}

export default FindOut;