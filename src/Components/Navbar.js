import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const a = props.title;

  return (
    <div>
      <Outlet/>
      <nav className={` navbar navbar-expand-lg bg-${props.mod} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"    >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.hom}
                </Link>
              </li>

              <li className="nav-item">
                <Link  className="nav-link active" aria-current="page" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>

            <div
              className="btn-toolbar mx-2 border-dark"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2 "
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary " id="10" onClick={ (e)=>{
                   console.log(e.target.id)
                   props.colf("blue")
                }} >
                  1
                </button>
                <button type="button" className="btn btn-danger"  id={"20"} onClick={(e)=>{
                   console.log(e.target.id)
                   props.colf("red")
                }} >
                  2
                </button>
                <button type="button" className="btn btn-warning" onClick={()=>{
                  props.colf("yellow")
                }} >
                  3
                </button>
                <button type="button" className="btn btn-info" onClick={()=>{
                  props.colf("pink")
                }} >
                  4
                </button>
               
              </div>
              
            </div>

            <div className="form-check form-switch m-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.vary}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefaul">
                Change mode
              </label>
            </div>

            {/* <button className="btn btn-primary m-2">Mode</button> */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  hom: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
  hom: "add home name",
  aboutText: " add about ",
};
