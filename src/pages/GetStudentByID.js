import React from "react";
import Header from "../component/Header";
import GetSingleStudent from "../component/GetSingleStudent";
import Footer from "../component/Footer";

const GetStudentByID = () =>{
    return (
        <React.Fragment>
            <Header/>
            <GetSingleStudent/>
            <Footer/>
        </React.Fragment>
    )
        
}
export default GetStudentByID;