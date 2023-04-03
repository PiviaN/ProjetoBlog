import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Blog.css";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import blackSelector from "../../assets/black-selector-2.png";

export default function Blog() {
  return (
    <>
      <section className="blog-desktop">
        <div className="container">
          <h1 className="blog-title">Lorem ipsum dolor sit amet.</h1>
          <div className="d-flex align-items-center justify-content-between text-and-input">
            <p className="blog-subtitle">Lorem ipsum dolor sit amet.</p>
            <div className="d-flex align-items-center search-area">
              <FontAwesomeIcon
                icon={faSearch}
                size="sm"
                className="search-icon"
              />
              <input
                type="text"
                placeholder="Pesquise o assunto de sua preferência"
                className="search-input"
              ></input>
            </div>
          </div>

          <div className="d-flex align-items-center tecnology-cards">
            <div className="big-tecnology-card">
              <div className="d-flex flex-column">
                <div className="control-tecnology-big-card-button d-flex justify-content-end">
                  <button type="button" className="tecnology-button">
                    <p className="tecnology-button-p">tecnologia</p>
                  </button>
                </div>
                <div className="control-big-title">
                  <h2 className="big-title">Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="control-big-description">
                  <p className="big-description">
                    É a primeira etapa e talvez uma das mais importantes. É onde
                    as definições acontecem.
                  </p>
                </div>
                <a href="https://google.com" className="read-link">
                  Ler completo&gt;
                </a>
              </div>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end control-tecnology-button">
                  <button type="button" className="tecnology-button">
                    <p className="tecnology-button-p">tecnologia</p>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <div className="control-small-title">
                <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>
              </div>
              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end control-tecnology-button">
                  <button type="button" className="tecnology-button">
                    <p className="tecnology-button-p">tecnologia</p>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <div className="control-small-title">
                <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>
              </div>
              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end control-tecnology-button">
                  <button type="button" className="tecnology-button">
                    <p className="tecnology-button-p">tecnologia</p>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <div className="control-small-title">
                <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>
              </div>
              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end control-tecnology-button">
                  <button type="button" className="tecnology-button">
                    <p className="tecnology-button-p">tecnologia</p>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <div className="control-small-title">
                <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>
              </div>
              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="access-blog">
              <p className="access-blog-p">acessar blog completo</p>
            </button>
          </div>
        </div>
      </section>

      <section className="blog-mobile">
        <div className="d-flex flex-column">
          <div className="d-flex overflow-x-hidden justify-content-center">
            <div className="control-blog-title">
              <h1 className="blog-title">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="big-circle-arrow-mobile hover-circle">
              <FontAwesomeIcon icon={faArrowRight} size="2xl" color="#fff" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="flex-column">
              <p className="blog-subtitle">Lorem ipsum dolor sit amet.</p>
              <div className="d-flex align-items-center search-area">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="sm"
                  className="search-icon"
                />
                <input
                  type="text"
                  placeholder="Pesquise o assunto de sua preferência"
                  className="search-input"
                ></input>
              </div>
            </div>
          </div>

          <div className="big-tecnology-card">
            <div className="d-flex justify-content-end control-tecnology-button-big-card">
              <button type="button" className="tecnology-button-big-card">
                <p className="tecnology-button-p">tecnologia</p>
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center control-big-card-info">
              <div className="d-flex flex-column">
                <div className="control-big-title">
                  <h2 className="big-title">Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="control-big-description">
                  <p className="big-description">
                    É a primeira etapa e talvez uma das mais importantes. É onde
                    as definições acontecem.
                  </p>
                </div>
                <a href="https://google.com" className="read-link">
                  Ler completo&gt;
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex overflow-auto tecnology-cards">
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end">
                  <div className="control-tecnology-button">
                    <button type="button" className="tecnology-button">
                      <p className="tecnology-button-p">tecnologia</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>

              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end">
                  <div className="control-tecnology-button">
                    <button type="button" className="tecnology-button">
                      <p className="tecnology-button-p">tecnologia</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>

              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end">
                  <div className="control-tecnology-button">
                    <button type="button" className="tecnology-button">
                      <p className="tecnology-button-p">tecnologia</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>

              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
            <div className="small-tecnology-container">
              <div className="small-tecnology-card">
                <div className="d-flex justify-content-end">
                  <div className="control-tecnology-button">
                    <button type="button" className="tecnology-button">
                      <p className="tecnology-button-p">tecnologia</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="tecnology-data">Bruno Dias</p>
                <p className="tecnology-data">00/00/0000</p>
              </div>
              <h3 className="small-title">Lorem ipsum dolor sit amet.</h3>

              <div className="control-small-description">
                <p className="small-description">
                  É a primeira etapa e talvez uma das mais importantes. É onde
                  as definições acontecem.
                </p>
              </div>
              <a href="https://google.com" className="read-link">
                Ler completo&gt;
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-37">
            <img src={blackSelector} alt="selector" />
          </div>

          <div className="d-flex justify-content-center mb-91">
            <button className="access-blog">
              <p className="access-blog-p">acessar blog completo</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
