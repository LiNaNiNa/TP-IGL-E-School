import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Core from './CoreStudent';


import checkicon from './images/check.png';
import homeicon from './images/homework.png';
import workicon from './images/work.png';
import consultericon from './images/Consulter.png';

import NavbarProfile from './NavbarProfile';
import ContacteProfile from './ContacteProfile';


export default class StudentPage extends React.Component {
    render() {
        return (
            <div>
                <NavbarProfile name={this.props.name} />
                <div className="mt-5" >
                    <div className="row m-3 potm " onClick={() => {

                        if (document.getElementById('pageprin')) {
                            ReactDOM.render(
                                <Core UserID={this.props.UserID} name={this.props.name} Token={this.props.Token} />, document.getElementById('pageprin'));
                        }
                    }}>

                        <div className="col-sm-2"></div>
                        <div className="col-sm-7  " className=" shadow p-5 mb-5 rounded pmain  " >
                            <div className="row " >
                                <div className="col-sm-6 ">
                                    <h2>Show Mark</h2>
                                    <b>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</b>
                                </div>
                                <div className="col-sm-2 "></div>
                                <div className="col-sm-4 "> <img className="imgresp" src={homeicon} /></div>
                            </div>



                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"></div>


                    </div>


                    <div className="row m-3 ">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                            <div className="row">
                                <div className="col-sm-4"> <img className="imgresp" src={consultericon} /></div>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-6">
                                    <h2>Consult Agenda</h2>
                                    <b>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</b>
                                </div>


                            </div>



                        </div>

                        <div className="col-sm-2"></div>


                    </div>
                    <div className="row m-3 ">

                        <div className="col-sm-2"></div>
                        <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Review Courses</h2>
                                    <b>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</b>
                                </div>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4"> <img className="imgresp" src={workicon} /></div>
                            </div>



                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"></div>


                    </div>

                    <div className="row m-3">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " o>
                            <div className="row">
                                <div className="col-sm-4"> <img className="imgresp" src={workicon} /></div>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-6">
                                    <h2>Deposit Work</h2>
                                    <b>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</b>
                                </div>


                            </div>



                        </div>

                        <div className="col-sm-2"></div>


                    </div>
                    <div className="row m-3">

                        <div className="col-sm-2"></div>
                        <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Check TD</h2>
                                    <b>Some quick example text to build on the card title and make up the bulk of
                         the card's content.</b>
                                </div>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4"> <img className="imgresp" src={checkicon} /></div>
                            </div>



                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"></div>


                    </div>

                </div>
                <ContacteProfile />
            </div>

        );
    }
}


if ((Cookies.get("Profile") != null) && ((Cookies.get("Profile").toUpperCase() == "ETUDIANT"))){

    
    if (Cookies.get("UserID") != null && Cookies.get("Username") != null){
    
        if (document.getElementById('pageprin')) {
            ReactDOM.render(<StudentPage UserID={Cookies.get("UserID")} name={Cookies.get("Username")} Token={Cookies.get("Token")} />, document.getElementById('pageprin'));
            
        }
}

}
