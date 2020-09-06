import React from "react";
import "./Weather.css";
import Button from "react-bootstrap/Button";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="city" id="city">
          Boston
        </h1>
        <h1 className="time" id="time">
          10:00
        </h1>
        <div className="row">
          <div className="col-8">
            <h2 id="date">Tuesday August 12th</h2>
            <h2>
              <span className="mainTemp" id="main-temp">
                75
              </span>
              °F | °C
              <img src="" alt="" id="icon" />
            </h2>
          </div>
          <div className="col-4">
            <h3 id="description">Cloudy</h3>
            <h3>
              Humidity: <span id="humidity"></span>%
            </h3>
            <h3>
              Feels Like: <span id="feels-like"></span>
            </h3>
            <h3>
              Wind: <span id="wind"></span>
            </h3>
          </div>
        </div>
        <div className="row text-center" id="forecast"></div>
        <form id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type City Name"
                className="form-control"
                id="city-input"
              />
            </div>
            <div className="col-3">
              <input className="btn btn-info" type="submit" value="Search 🔍" />
            </div>
            <div className="col-3">
              <input
                className="btn btn-info"
                id="current-btn"
                type="button"
                value="Current🌆"
              />
            </div>
          </div>
        </form>
      </div>
      <p>
        <a href="https://github.com/ks61680/FinalProject-WeatherApp">
          Open Source Code
        </a>
      </p>
    </div>
  );
}
