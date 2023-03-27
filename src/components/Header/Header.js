import React from "react";
import "./Header.css";
import burgerIcon from "../../assets/burger-icon.png";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuMobile"
          aria-expanded="true"
        >
          <img src={burgerIcon} alt="icon" />
        </button>
        <div className="navbar-collapse collapse" id="menuMobile">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                e-commerce
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                d2c
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                transportadoras
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                programa de esg
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                blog
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item no-display">
              <a className="nav-link" href="#">
                onde está meu pedido?
              </a>
            </li>
          </ul>

          <button className="order-button">
            <p className="order-p">Onde está meu pedido?</p>
          </button>
        </div>
      </div>
    </nav>
  );
}
