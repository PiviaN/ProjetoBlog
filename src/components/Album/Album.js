import React from "react";
import "./Album.css";
import blackSelector from "../../assets/black-selector-2.png";
import cardAlbum from "../../assets/card-album.png";
import topAlbumCircle from "../../assets/top-album-img.png";
import lateralImg from "../../assets/lateral-img.png";
import lateralImgMobile from "../../assets/lateral-img-mobile.png";

export default function Album() {
  return (
    <>
      <section className="album album-desktop d-flex">
        <img src={lateralImg} alt="lateral" className="lateral-image" />
        <div className="top-album">
          <div className="d-flex align-items-center">
            <div className="control-album-title">
              <h1 className="album-title">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="control-album-description">
              <p className="album-description">
                É a primeira etapa e talvez uma das mais importantes. É onde as
                definições acontecem, fazer de forma bem pensada trará uma
                economia futura de tempo e com certeza de dinheiro.
              </p>
            </div>
          </div>
          <img src={topAlbumCircle} alt="circle" className="top-album-circle" />
          <div className="control-top-album-title">
            <h2 className="top-album-title">
              “Lorem ipsum dolor sit amet. Et sequi perferendis At molestiae
              numquam et itaque accusamus id quia adipisci.”
            </h2>
          </div>
          <p className="top-album-subtitle mb-2">Lorem ipsum dolor sit amet.</p>
          <p className="top-album-description">Lorem ipsum</p>

          <div className="d-flex justify-content-center control-selector">
            <img src={blackSelector} alt="selector" />
          </div>
          <div className="d-flex align-items-center">
            <div className="control-album-title">
              <h1 className="album-title">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="control-album-description">
              <p className="album-description">
                É a primeira etapa e talvez uma das mais importantes. É onde as
                definições acontecem, fazer de forma bem pensada trará uma
                economia futura de tempo e com certeza de dinheiro.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center album-pictures">
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
            <img src={cardAlbum} alt="card" className="card-album"></img>
          </div>
        </div>
      </section>

      <section className="album album-mobile">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div className="control-album-title">
              <h1 className="album-title">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="control-album-description">
              <p className="album-description">
                É a primeira etapa e talvez uma das mais importantes. É onde as
                definições acontecem, fazer de forma bem pensada trará uma
                economia futura de tempo e com certeza de dinheiro.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <img
            src={lateralImgMobile}
            alt="lateral"
            className="lateral-image-mobile"
          />
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column">
              <div className="control-top-album-title">
                <h2 className="top-album-title">
                  “Lorem ipsum dolor sit amet. Et sequi perferendis At molestiae
                  numquam et itaque accusamus id quia adipisci.”
                </h2>
              </div>
              <p className="top-album-subtitle mb-2">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="top-album-description">Lorem ipsum</p>
              <img
                src={blackSelector}
                alt="selector"
                className="black-selector"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div className="control-album-title">
              <h1 className="album-title">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="control-album-description">
              <p className="album-description">
                É a primeira etapa e talvez uma das mais importantes. É onde as
                definições acontecem, fazer de forma bem pensada trará uma
                economia futura de tempo e com certeza de dinheiro.
              </p>
            </div>

            <div className="d-flex align-items-center album-pictures">
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
              <img src={cardAlbum} alt="card" className="card-album"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
