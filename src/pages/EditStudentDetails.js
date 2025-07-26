import React from "react";
import EditStudent from "../component/EditStudent";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Navbar = () =>{
    return (
        <React.Fragment>
            <Header/>
            <EditStudent/>
            <Footer/>
        </React.Fragment>
    )
        
}
export default Navbar;