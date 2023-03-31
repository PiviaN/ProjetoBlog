import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <section className="form d-flex align-items-center">
      <div className="d-flex flex-column">
        <h1 className="form-title">Lorem ipsum dolor sit amet.</h1>
        <p className="form-subtitle">Lorem ipsum dolor sit amet.</p>

        <form>
          <div className="row row-full">
            <div className="col-12">
              <input className="form-input" placeholder="Nome completo" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-12">
              <input className="form-input" placeholder="E-mail" />
            </div>
            <div className="col-xl-6 col-12">
              <input className="form-input" placeholder="(11) 91234-5678" />
            </div>
          </div>
        </form>

        <p className="form-description">
          Qual o tipo de contato que você está procurando?
        </p>

        <div className="d-flex align-items-center control-actions">
          <button className="action-button" type="button">
            <p className="action-button-p">comercial</p>
          </button>
          <button className="action-button" type="button">
            <p className="action-button-p">parcerias</p>
          </button>
        </div>
      </div>
    </section>
  );
}
