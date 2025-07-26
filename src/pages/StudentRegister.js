import React from "react";
import Header from "../component/Header";
import StudentRegistration from "../component/StudentRegistration";
import Footer from "../component/Footer";

const Navbar = () =>{
    return (
        <React.Fragment>
            <Header/>
            <StudentRegistration/>
            <Footer/>
        </React.Fragment>
    )
        
}
export default Navbar;