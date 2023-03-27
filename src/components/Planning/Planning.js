import React from "react";
import "./Planing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Planning() {
  return (
    <>
      <div className="planning desktop-layout">
        <div className="container w-auto-mobile">
          <div className="row custom-row">
            <div className="col-6">
              <div className="control-title-planning">
                <h1 className="title-planning">Lorem ipsum dolor sit amet.</h1>
              </div>
              <div className="control-subtitle-planning">
                <h3 className="subtitle-planning">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center card-vertical">
                  <div className="white-block col-lg-6">
                    <div className="black-circle black-circle-margin">
                      <span className="white-number">01</span>
                    </div>
                  </div>
                  <div className="info">
                    <h3 className="title-info">Planejamento</h3>
                    <div className="control-subtitle-info">
                      <p className="subtitle-info">
                        Inteligência para gestão de vendas. Inteligência para
                        gestão de vendas.
                      </p>
                    </div>
                    <a className="link-info-planning link-info-planning-active">
                      Entenda &gt;
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center card-vertical">
                  <div className="white-block col-lg-6">
                    <div className="black-circle black-circle-margin">
                      <span className="white-number">02</span>
                    </div>
                  </div>
                  <div className="info col-6">
                    <h3 className="title-info">Planejamento</h3>
                    <div className="control-subtitle-info">
                      <p className="subtitle-info">
                        Inteligência para gestão de vendas. Inteligência para
                        gestão de vendas.
                      </p>
                    </div>
                    <a className="link-info-planning">Entenda &gt;</a>
                  </div>
                </div>
                <div className="d-flex align-items-center card-vertical">
                  <div className="white-block col-lg-6">
                    <div className="black-circle black-circle-margin">
                      <span className="white-number">03</span>
                    </div>
                  </div>
                  <div className="info col-6">
                    <h3 className="title-info">Planejamento</h3>
                    <div className="control-subtitle-info">
                      <p className="subtitle-info">
                        Inteligência para gestão de vendas. Inteligência para
                        gestão de vendas.
                      </p>
                    </div>
                    <a className="link-info-planning">Entenda &gt;</a>
                  </div>
                </div>
                <div className="d-flex align-items-center card-vertical">
                  <div className="white-block col-lg-6">
                    <div className="black-circle black-circle-margin">
                      <span className="white-number">04</span>
                    </div>
                  </div>
                  <div className="info col-6">
                    <h3 className="title-info">Planejamento</h3>
                    <div className="control-subtitle-info">
                      <p className="subtitle-info">
                        Inteligência para gestão de vendas. Inteligência para
                        gestão de vendas.
                      </p>
                    </div>
                    <a className="link-info-planning">Entenda &gt;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <div className="emphasis-image"></div>
                <div className="ml-text-emphasis">
                  <div className="control-title-emphasis">
                    <h3 className="title-emphasis">
                      Lorem ipsum dolor sit amet.
                    </h3>
                  </div>
                  <div className="control-subtitle-emphasis">
                    <p className="subtitle-emphasis">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="control-description-emphasis">
                    <p className="description-emphasis">
                      É a primeira etapa e talvez uma das mais importantes. É
                      onde as definições acontecem, fazer de forma bem pensada
                      trará uma economia futura de tempo e com certeza de
                      dinheiro.
                    </p>
                  </div>

                  <div className="d-flex mb-mini">
                    <div className="d-flex flex-column mr-mini">
                      <h4 className="mini-title">Lorem ipsum</h4>
                      <div className="control-mini-description">
                        <p className="mini-description">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                      <a className="link-info-planning link-info-planning-active">
                        Acessar &gt;
                      </a>
                    </div>
                    <div className="d-flex flex-column mr-mini">
                      <h4 className="mini-title">Lorem ipsum</h4>
                      <div className="control-mini-description">
                        <p className="mini-description">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                      <a className="link-info-planning link-info-planning-active">
                        Acessar &gt;
                      </a>
                    </div>
                    <div className="d-flex flex-column mr-mini">
                      <h4 className="mini-title">Lorem ipsum</h4>
                      <div className="control-mini-description">
                        <p className="mini-description">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                      <a className="link-info-planning link-info-planning-active">
                        Acessar &gt;
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-circles">
                    <div className="d-flex align-items-center">
                      <div className="black-circle mr-circle hover-circle">
                        <span className="white-number">01</span>
                      </div>
                      <div className="white-circle mr-circle hover-circle">
                        <span className="black-number">02</span>
                      </div>
                      <div className="white-circle mr-circle hover-circle">
                        <span className="black-number">03</span>
                      </div>
                      <div className="white-circle mr-circle hover-circle">
                        <span className="black-number">04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layout-mobile">
        <div className="planning-mobile d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <div className="control-title-planning">
                <h1 className="title-planning">Lorem ipsum dolor sit amet.</h1>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="control-subtitle-planning">
                <h3 className="subtitle-planning">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="placement-area-slide d-flex justify-content-between align-items-center">
          <div className="big-circle-arrow left-negative hover-circle">
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" color="#fff" />
          </div>
          <div className="big-circle-arrow right-negative hover-circle">
            <FontAwesomeIcon icon={faArrowRight} size="2xl" color="#fff" />
          </div>
        </div>
        <div className="d-flex align-items-center flex-column mt-3">
          <div className="control-title-info">
            <h3 className="title-info">Planejamento</h3>
          </div>

          <div className="control-subtitle-info mt-2">
            <p className="subtitle-info">
              Inteligência para gestão de vendas. Inteligência para gestão de
              vendas.
            </p>
          </div>
          <div className="control-link-info-planning">
            <a className="link-info-planning link-info-planning-active">
              Entenda &gt;
            </a>
          </div>
          <div className="d-flex align-items-center mt-3">
            <div className="d-flex flex-column align-items-center">
              <div className="black-circle mr-circle hover-circle">
                <span className="white-number">01</span>
              </div>
              <div className="bottom-line"></div>
            </div>
            <div className="white-circle mr-circle hover-circle mt-negative-circle">
              <span className="black-number">02</span>
            </div>
            <div className="white-circle mr-circle hover-circle mt-negative-circle">
              <span className="black-number">03</span>
            </div>
            <div className="white-circle mr-circle hover-circle mt-negative-circle">
              <span className="black-number">04</span>
            </div>
          </div>

          <div className="control-subtitle-emphasis">
            <p className="subtitle-emphasis">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="control-description-emphasis">
            <p className="description-emphasis">
              É a primeira etapa e talvez uma das mais importantes. É onde as
              definições acontecem, fazer de forma bem pensada trará uma
              economia futura de tempo e com certeza de dinheiro.
            </p>
          </div>
        </div>

        <div className="d-flex mini-infos justify-content-center align-items-center">
          <div className="d-flex flex-column mr-mini">
            <h4 className="mini-title">Lorem ipsum</h4>
            <div className="control-mini-description">
              <p className="mini-description">Lorem ipsum dolor sit amet.</p>
            </div>
            <a className="link-info-planning link-info-planning-active">
              Acessar &gt;
            </a>
          </div>
          <div className="d-flex flex-column mr-mini">
            <h4 className="mini-title">Lorem ipsum</h4>
            <div className="control-mini-description">
              <p className="mini-description">Lorem ipsum dolor sit amet.</p>
            </div>
            <a className="link-info-planning link-info-planning-active">
              Acessar &gt;
            </a>
          </div>
          <div className="d-flex flex-column mr-mini">
            <h4 className="mini-title">Lorem ipsum</h4>
            <div className="control-mini-description">
              <p className="mini-description">Lorem ipsum dolor sit amet.</p>
            </div>
            <a className="link-info-planning link-info-planning-active">
              Acessar &gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
