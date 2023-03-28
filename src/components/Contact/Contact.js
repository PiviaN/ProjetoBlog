import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact-desktop d-flex align-items-center">
        <div className="container">
          <h1 className="contact-title">Lorem ipsum dolor sit amet.</h1>
          <p className="contact-subtitle">Lorem ipsum dolor sit amet.</p>
          <button className="button-contact">
            <p className="button-contact-p">Quero entrar em contato</p>
          </button>
        </div>
      </section>

      <section className="contact-mobile d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <h1 className="contact-title text-center">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="contact-subtitle text-center">
            Lorem ipsum dolor sit amet.
          </p>
          <button className="button-contact">
            <p className="button-contact-p">Quero entrar em contato</p>
          </button>
        </div>
      </section>
    </>
  );
}
