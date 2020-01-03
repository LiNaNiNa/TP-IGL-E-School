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
                        <div className="col-sm-4 p-4 " className=" shadow p-5 mb-5 bg-white rounded pmain ">
                            <center> <h2 className="p-4  ">Show Mark</h2>
                                   <img className="imgresp" src={homeicon} /></center>
                               
                                   


                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4 p-4 " className=" shadow p-5 mb-5 bg-white rounded pmain ">
                     <cente><h2 className="p-4  ">Consult Agenda</h2>
                          <img className="imgresp" src={consultericon} /></cente>     

                        </div>
                        


                    </div>




                    <div  className="row m-3 potm">
                    

                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 p-4 " className=" shadow p-5 mb-5 bg-white rounded pmain ">
                    <center>  <h2 className="p-4  ">Review Courses</h2>
                                
                       <img className="imgresp" src={workicon} /></center>
                          
                        
                      



                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 p-4 " className=" shadow p-5 mb-5 bg-white rounded pmain ">

                    <center>

                        <h2 className="p-4">Check TD</h2>
                        <img className="imgresp" src={workicon} />
                      </center>
                    </div>
                   


                </div>
                <div  className="row m-3 potm">
                    

                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 p-4 " className=" shadow p-5 mb-5 bg-white rounded pmain ">
                    <center>  <h2 className="p-4  ">Review Courses</h2>
                                
                    <img className="imgresp" src={checkicon} /></center>
                          
                        
                      



                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 p-4 " >

                  
                    </div>
                   


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
