import React from "react";
import "./CardsList.css";
import placementArea from "../../assets/placement-area.png";

export default function CardsList() {
  return (
    <>
      <section className="cards-list desktop-layout">
        <div className="container">
          <div className="d-flex flex-column">
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

            <div className="d-flex">
              <div className="d-flex align-items-center info-left">
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
                      É a primeira etapa e talvez uma das mais importantes. É
                      onde as definições acontecem, fazer de forma bem pensada
                      trará uma economia futura de tempo e com certeza de
                      dinheiro.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a
                      href="https://google.com"
                      className="link-info-planning text-right"
                    >
                      Entenda &gt;
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="big-card-image"></div>
                <button className="big-card-button">
                  <p className="big-card-button-p">
                    Entenda sobre o programa completo
                  </p>
                </button>
              </div>
              <div className="d-flex align-items-center info-right">
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
                      <a
                        href="https://google.com"
                        className="link-info-planning text-start"
                      >
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
                      <a
                        href="https://google.com"
                        className="link-info-planning text-start"
                      >
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

      <section className="cards-list-mobile mobile-layout">
        <div className="d-flex align-items-center cards-stretched">
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
        <div className="d-flex justify-content-center">
          <div className="big-card-texts">
            <h1 className="big-card-title">Lorem ipsum dolor sit amet.</h1>
            <p className="big-card-subtitle">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="double-triangle d-flex justify-content-center">
          <div className="d-flex flex-column control-pt">
            <h4 className="double-triangle-title text-center">
              Lorem ipsum dolor sit amet.
            </h4>
            <div className="control-double-triangle-subtitle text-center mt-1">
              <p className="double-triangle-subtitle">
                É a primeira etapa e talvez uma das mais importantes. É onde as
                definições acontecem, fazer de forma bem pensada trará uma
                economia futura de tempo e com certeza de dinheiro.
              </p>
            </div>
            <a
              href="https://google.com"
              className="link-info-planning text-center mt-2"
            >
              Entenda &gt;
            </a>

            <div className="big-white-circle">
              <div className="d-flex justify-content-center align-items-center circles">
                <span className="small-circle"></span>
                <span className="big-circle"></span>
                <span className="small-circle"></span>
              </div>
              <div className="control-text-middle-absolute">
                <p className="text-middle-absolute">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
