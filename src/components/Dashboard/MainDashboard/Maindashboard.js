import React, { useEffect, useState } from "react";
import "./MainDashboard.css";
import Navbar from "../../../layout/Navbar/Navbar";
import Footer from "../../../layout/Footer/Footer";
import imglogo from "./images/logo_prev_ui.png";
import { LiaUserNurseSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";
import { TiUserDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";
import { IoIosArrowDown } from "react-icons/io";

const Maindashboard = () => {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById("collapseTarget");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });

  return (
    <section className="dashboard_main_section">
      <div className="dashboard_main_div container">
        <Link to="/main">
          <img src={imglogo} alt="" className="img-fluid mt-2" />
        </Link>

        <span className=""></span>

        <ul className="overflow-auto" style={{height: '600px'}}>
          <li>
            <div class="list_icon">
              <LiaUserNurseSolid size="2rem"></LiaUserNurseSolid>
            </div>
            <div>
              <Link to="/dashboard">
                <p>Dashboard</p>
              </Link>
            </div>
          </li>
          <li>
            <div class="list_icon">
              <LiaUserNurseSolid size="2rem"></LiaUserNurseSolid>
            </div>
            <div>
              <Link to="/dashboard/createbabysiter">
                <p>Add BabySiter</p>
              </Link>
            </div>
          </li>

          <li>
            <div class="list_icon">
              <GrUpdate size="1.5rem"></GrUpdate>
            </div>
            <div>
              <Link to="/dashboard/addService">
                <p>Service</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="py-1">
              <a className="" onClick={() => setToggle((toggle) => !toggle)}>
                <div class="list_icon">
                  <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                </div>
                <div>
                  <Link to="">
                    <p>Enrollments</p>
                  </Link>
                </div>

                <div class="list_icon">
                  <IoIosArrowDown
                    size="1.6rem"
                    style={{ paddingBottom: "1px", paddingLeft: "4px" }}
                  ></IoIosArrowDown>
                </div>
              </a>
              <div className="collapse" id="collapseTarget">
                <a href="">
                  <div class="list_icon">
                    <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                  </div>
                  <div>
                    <Link to="/dashboard/enrolment">
                      <p>New Enrollments</p>
                    </Link>
                   
                  </div>
                </a>
                <a href="">
                  <div class="list_icon">
                    <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                  </div>
                  <div>
                  <Link to="/dashboard/acceptedenrolment">
                      <p>Accepted Enrollments</p>
                    </Link>
                   
                  </div>
                </a>
                <a href="">
                  <div class="list_icon">
                    <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                  </div>
                  <div>
                  <Link to="/dashboard/onboardenrolment">
                      <p>Onboard Enrollments</p>
                    </Link>
                   
                  </div>
                </a>
                <a href="">
                  <div class="list_icon">
                    <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                  </div>
                  <div>
                  <Link to="/dashboard/rejectedenrolment">
                      <p>Rejected Enrollments</p>
                    </Link>
                   
                  </div>
                </a>

              </div>
            </div>
          </li>
          <li>
            <div class="list_icon">
              <GrUpdate size="1.5rem"></GrUpdate>
            </div>
            <div>
              <Link to="#">
                <p>Suscriber</p>
              </Link>
            </div>
          </li>
          <li>
            <div class="list_icon">
              <GrUpdate size="1.5rem"></GrUpdate>
            </div>
            <div>
              <Link to="#">
                <p>Query</p>
              </Link>
            </div>
          </li>
          <li>
            <div class="list_icon">
              <GrUpdate size="1.5rem"></GrUpdate>
            </div>
            <div>
              <Link to="/dashboard/report">
                <p>Report</p>
              </Link>
            </div>
          </li>

          <li>
            <div className="py-2">
              <a className="" onClick={() => setToggle((toggle) => !toggle)}>
                <div class="list_icon">
                  <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                </div>
                <div>
                  <Link to="/deleteNurse">
                    <p>Babysitter</p>
                  </Link>
                </div>

                <div class="list_icon">
                  <IoIosArrowDown
                    size="1.6rem"
                    style={{ paddingBottom: "1px", paddingLeft: "4px" }}
                  ></IoIosArrowDown>
                </div>
              </a>
              <div className="collapse" id="collapseTarget">
                <a href="">
                  <div class="list_icon">
                    <TiUserDeleteOutline size="1.5rem"></TiUserDeleteOutline>
                  </div>
                  <div>
                    <Link to="/deleteNurse">
                      <p>Add</p>
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>

    
    </section>
  );
};

export default Maindashboard;
