import React from "react";
import "./CardGroup.css";
import cardFigureImg from "../../assets/card-figure-img.png";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dots2 from "../../assets/dots-2.png";

export default function CardGroup() {
  return (
    <>
      <section className="card-group-desktop d-flex">
        <div className="pt-97">
          <h1 className="cards-slider-title">Lorem ipsum dolor sit amet.</h1>
          <p className="cards-slider-subtitle">Lorem ipsum dolor sit amet.</p>

          <div className="d-flex cards-horizontal justify-content-between">
            <div className="d-flex align-items-center card-horizontal">
              <div className="white-block"></div>
              <div className="info">
                <h3 className="title-info color-white text-uppercase">
                  ux tal
                </h3>
                <div className="control-subtitle-info-2">
                  <p className="subtitle-info color-white">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-white"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center card-horizontal">
              <div className="white-block"></div>
              <div className="info">
                <h3 className="title-info color-white text-uppercase">
                  ux tal
                </h3>
                <div className="control-subtitle-info-2">
                  <p className="subtitle-info color-white">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-white"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center card-horizontal">
              <div className="white-block"></div>
              <div className="info">
                <h3 className="title-info color-white text-uppercase">
                  ux tal
                </h3>
                <div className="control-subtitle-info-2">
                  <p className="subtitle-info color-white">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-white"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center card-horizontal">
              <div className="white-block"></div>
              <div className="info">
                <h3 className="title-info color-white text-uppercase">
                  ux tal
                </h3>
                <div className="control-subtitle-info-2">
                  <p className="subtitle-info color-white">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-white"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end buttons-slider">
            <div className="d-flex align-items-center">
              <button className="button-counter">
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" color="#fff" />
              </button>
              <p className="counter">2/10</p>
              <button className="button-counter">
                <FontAwesomeIcon icon={faArrowRight} size="2xl" color="#fff" />
              </button>
            </div>
          </div>
        </div>
        <div className="card-figure">
          <img
            src={cardFigureImg}
            alt="card figure"
            className="card-figure-img"
          />
        </div>
      </section>

      <section className="card-group-mobile">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div className="control-cards-slider-title-mobile">
              <h1 className="cards-slider-title-mobile">
                Lorem ipsum dolor sit amet.
              </h1>
            </div>

            <p className="cards-slider-subtitle-mobile">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="slider-mobile">
          <div className="d-flex align-items-center">
            <div className="card-slider-mobile d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                <div className="white-block-mobile"></div>
                <h3 className="card-slider-mobile-title">ux tal</h3>
                <div className="control-card-slider-mobile-description">
                  <p className="card-slider-mobile-description">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-black"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
            <div className="card-slider-mobile d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                <div className="white-block-mobile"></div>
                <h3 className="card-slider-mobile-title">ux tal</h3>
                <div className="control-card-slider-mobile-description">
                  <p className="card-slider-mobile-description">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-black"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
            <div className="card-slider-mobile d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                <div className="white-block-mobile"></div>
                <h3 className="card-slider-mobile-title">ux tal</h3>
                <div className="control-card-slider-mobile-description">
                  <p className="card-slider-mobile-description">
                    Inteligência para gestão de vendas. Inteligência para gestão
                    de vendas.
                  </p>
                </div>
                <a
                  href="https://google.com"
                  className="link-info-planning color-black"
                >
                  Entenda &gt;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <img src={dots2} alt="dots" />
        </div>
      </section>
    </>
  );
}
