import React from "react";
import "./Header.css";
import burgerIcon from "../../assets/burger-icon.png";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container container-fluid">
        <a href="https://google.com" className="navbar-brand">
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
              <a href="https://google.com" className="nav-link">
                e-commerce
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a href="https://google.com" className="nav-link">
                d2c
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a href="https://google.com" className="nav-link">
                transportadoras
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a href="https://google.com" className="nav-link">
                programa de esg
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item">
              <a href="https://google.com" className="nav-link">
                blog
              </a>
              <span className="black-square"></span>
            </li>
            <li className="nav-item no-display">
              <a href="https://google.com" className="nav-link">
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
