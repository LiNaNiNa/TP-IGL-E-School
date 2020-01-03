import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Jumbotron from './Jumbotron';
import StudentPage from './StudentPage';
import Slide from './Slide';
import Footer from './Footer';
import Formlg from './Formlg';
import student from './images/student.png';
import admin from './images/admin.png';
import deleteicon from './images/delete.png';
import usericon from './images/user.png';
import teacher from './images/teacher.png';
const text1 = <h3 className="display-6 ">The student can check his notes. </h3>;
const text2 = <h3 className="display-6 " >The admintrator can manage the notes of students. </h3>;
const text3 = <h3 className="display-6" >The teacher can put the notes of students. </h3>;




export default class Welcompage extends  React.Component {
    render() {
        return (
            <div>
                <div id="bodyHome" >
                    <Menu />
                    <Jumbotron />
                    <div className="container mt-5">
                        <h1 className="display-5 pt-4 pb-5" align="center">Who can use this web site and what can they do ?</h1>
                        <Slide textG={text1} ImgS={student} />
                        <Slide textG={text2} ImgS={admin} />
                        <Slide textG={text3} ImgS={teacher} />
                    </div>
                    
                    <Footer />
                </div>

                <div className="login " id="displayelem">

                    <img src={deleteicon} className="img-fluid closemg "  />
                    <div className="divlog">
                        <center className="pt-4"> <img src={usericon} className="img-fluid  imglogo"  /></center>
                        <h3 align="center" className="cww">Sign in</h3>
                        <Formlg />
                      
                    </div>
                </div>


            </div>
        );
    }

}
console.log(Cookies.get("UserID"));
if (Cookies.get("UserID") == null || Cookies.get("Username") == null || Cookies.get("Profile") == null){
    if (document.getElementById('pageprin')) {
        ReactDOM.render(<Welcompage />, document.getElementById('pageprin'));
    }
}
