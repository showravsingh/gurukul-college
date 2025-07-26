import React from "react";
import Header from "../component/Header";
import GetAllStudents from "../component/GetAllStudents";
import Footer from "../component/Footer";

const StudentList = () =>{
    return (
        <React.Fragment>
            <Header/>
            <GetAllStudents/>
            <Footer/>
        </React.Fragment>
    )
        
}
export default StudentList;