import React from "react";
import "./CardsList.css";
import placementArea from "../../assets/placement-area.png";

export default function CardsList() {
  return (
    <section className="cards-list desktop-layout">
      <div className="container">
        <div className="row">
          <h2 className="lists-title">Lorem ipsum dolor sit amet.</h2>
          <p className="lists-subtitle">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="d-flex list-of-cards">
          <div className="d-flex flex-column align-items-center control-card-ux">
            <div className="card-ux d-flex justify-content-center align-items-center flex-column">
              <p className="card-ux-title">ux commerce</p>
              <div className="control-card-ux-subtitle">
                <p className="card-ux-subtitle">
                  Inteligência para gestão de vendas.
                </p>
              </div>
            </div>
            <button className="saiba-mais">
              <p className="saiba-mais-p">Saiba mais</p>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center control-card-ux">
            <div className="card-ux d-flex justify-content-center align-items-center flex-column">
              <p className="card-ux-title">ux commerce</p>
              <div className="control-card-ux-subtitle">
                <p className="card-ux-subtitle">
                  Inteligência para gestão de vendas.
                </p>
              </div>
            </div>
            <button className="saiba-mais">
              <p className="saiba-mais-p">Saiba mais</p>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center control-card-ux">
            <div className="card-ux d-flex justify-content-center align-items-center flex-column">
              <p className="card-ux-title">ux commerce</p>
              <div className="control-card-ux-subtitle">
                <p className="card-ux-subtitle">
                  Inteligência para gestão de vendas.
                </p>
              </div>
            </div>
            <button className="saiba-mais">
              <p className="saiba-mais-p">Saiba mais</p>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center control-card-ux">
            <div className="card-ux d-flex justify-content-center align-items-center flex-column">
              <p className="card-ux-title">ux commerce</p>
              <div className="control-card-ux-subtitle">
                <p className="card-ux-subtitle">
                  Inteligência para gestão de vendas.
                </p>
              </div>
            </div>
            <button className="saiba-mais">
              <p className="saiba-mais-p">Saiba mais</p>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center control-card-ux">
            <div className="card-ux d-flex justify-content-center align-items-center flex-column">
              <p className="card-ux-title">ux commerce</p>
              <div className="control-card-ux-subtitle">
                <p className="card-ux-subtitle">
                  Inteligência para gestão de vendas.
                </p>
              </div>
            </div>
            <button className="saiba-mais">
              <p className="saiba-mais-p">Saiba mais</p>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center control-card-ux">
            <div className="card-ux d-flex justify-content-center align-items-center flex-column">
              <p className="card-ux-title">ux commerce</p>
              <div className="control-card-ux-subtitle">
                <p className="card-ux-subtitle">
                  Inteligência para gestão de vendas.
                </p>
              </div>
            </div>
            <button className="saiba-mais">
              <p className="saiba-mais-p">Saiba mais</p>
            </button>
          </div>
        </div>
      </div>

      <div className="big-card">
        <div className="container">
          <div className="big-card-texts">
            <h1 className="big-card-title">Lorem ipsum dolor sit amet.</h1>
            <p className="big-card-subtitle">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="row">
            <div className="col-3 d-flex align-items-center info-left">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-end">
                  <img
                    className="placement-area-img"
                    src={placementArea}
                    alt="placement area"
                  />
                </div>
                <h3 className="big-card-title2 text-right">
                  Lorem ipsum dolor sit amet.
                </h3>
                <div className="control-big-card-subtitle2 text-right">
                  <p className="big-card-subtitle2">
                    É a primeira etapa e talvez uma das mais importantes. É onde
                    as definições acontecem, fazer de forma bem pensada trará
                    uma economia futura de tempo e com certeza de dinheiro.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <a className="link-info-planning text-right">Entenda &gt;</a>
                </div>
              </div>
            </div>
            <div className="col-5 d-flex flex-column-reverse align-items-center big-card-image">
              <button className="big-card-button">
                <p className="big-card-button-p">
                  Entenda sobre o programa completo
                </p>
              </button>
            </div>
            <div className="col-3 d-flex align-items-center info-right">
              <div className="d-flex flex-column">
                <div className="d-flex flex-column mb-5">
                  <div className="d-flex justify-content-start">
                    <img
                      className="placement-area-img"
                      src={placementArea}
                      alt="placement area"
                    />
                  </div>
                  <h3 className="big-card-title2 text-start">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="control-big-card-subtitle2 text-start">
                    <p className="big-card-subtitle2">
                      É a primeira etapa e talvez uma das mais importantes. É
                      onde as definições acontecem, fazer de forma bem pensada
                      trará uma economia futura de tempo e com certeza de
                      dinheiro.
                    </p>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a className="link-info-planning text-start">
                      Entenda &gt;
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-start">
                    <img
                      className="placement-area-img"
                      src={placementArea}
                      alt="placement area"
                    />
                  </div>
                  <h3 className="big-card-title2 text-start">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="control-big-card-subtitle2 text-start">
                    <p className="big-card-subtitle2">
                      É a primeira etapa e talvez uma das mais importantes. É
                      onde as definições acontecem, fazer de forma bem pensada
                      trará uma economia futura de tempo e com certeza de
                      dinheiro.
                    </p>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a className="link-info-planning text-start">
                      Entenda &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
