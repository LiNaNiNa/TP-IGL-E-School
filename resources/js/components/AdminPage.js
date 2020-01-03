import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Core from './CoreAdmin';

import addicon from './images/Add.png';
import checkicon from './images/check.png';
import homeicon from './images/homework.png';
import workicon from './images/work.png';
import consultericon from './images/Consulter.png';
import NavbarAdmin from './NavbarAdmin';
import ContacteProfile from './ContacteProfile';

export default class AdminPage extends Component {
    render() {
        return (
            <div>
               
            <NavbarAdmin name={this.props.name}/>
            
            <div className="mt-5" >
            
                <div dusk="Option1Admin" className="row m-3 potm" onClick={() => {
                console.log("Yuupi");
                if (document.getElementById('pageprin')) {
                    ReactDOM.render(
                        <Core name={this.props.name} />, document.getElementById('pageprin'));
                }
                }}>
                    

                    <div className="col-sm-2"></div>
                    <div  className="col-sm-7  " className=" shadow p-5 mb-5 rounded pmain  " >
                        <div className="row " >
                            <div className="col-sm-6 ">
                                <h2>Add Student</h2>
                                <b>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</b>
                            </div>
                            <div className="col-sm-2 "></div>
                            <div className="col-sm-4 "> <img className="imgresp" src={addicon} /></div>
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
                                <h2>Create Agendas</h2>
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
                                <h2>Add Teacher</h2>
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
                    <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain ">
                        <div className="row">
                            <div className="col-sm-4"> <img className="imgresp" src={checkicon} /></div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <h2>View all Teachers</h2>
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
                                <h2>View all students</h2>
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

if ( (Cookies.get("Profile") != null) && ((Cookies.get("Profile").toUpperCase() == "ADMIN")) ) {
    if ((Cookies.get("UserID") != null) && (Cookies.get("Username") != null)){    
        if (document.getElementById('pageprin')) {
            ReactDOM.render(<AdminPage UserID={Cookies.get("UserID")} name={Cookies.get("Username")} Token={Cookies.get("Token")} />, document.getElementById('pageprin'));            
        }
}
}
