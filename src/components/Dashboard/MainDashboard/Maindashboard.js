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
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiGroup } from "react-icons/bi";
import { useCollapse } from "react-collapsed";
import Sidebar from "./Sidebar";


const Maindashboard = () => {
    // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    // var [toggle, setToggle] = useState(false);
    // var [toggle2, setToggle2] = useState(false);

    // useEffect(() => {
    //     var myCollapse = document.getElementById("collapseTarget");

    //     var bsCollapse = new Collapse(myCollapse, { toggle: false });

    //     toggle ? bsCollapse.show() : bsCollapse.hide();

    // });

    // useEffect(() => {
    //     var myCollapse2 = document.getElementById("collapseTarget2");
    //     var bsCollapse2 = new Collapse(myCollapse2, { toggle2: false });
    //     toggle2 ? bsCollapse2.show() : bsCollapse2.hide();
    // });

    const [open, setOpen] = useState(false)
    


    return (
        <section className="dashboard_main_section">

            
            <Sidebar></Sidebar>


        </section>
    );
};

export default Maindashboard;
