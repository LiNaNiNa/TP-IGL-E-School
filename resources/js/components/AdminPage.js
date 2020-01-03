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
                    <div  className="col-sm-4 p-4   " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                     
                         <center> <h2 className="p-4 mr-4 ml-4 ">Add Student</h2>
                           <img className="imgresp" src={addicon} /></center>
                        
                      



                    </div>
                    <div className="col-sm-2"></div>
                    <div  className="col-sm-4 p-4   " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                    <center> <h2 className="p-4">Create Agendas</h2>
                           <img className="imgresp" src={consultericon} /></center>
                    </div>
                   


                </div>

                <div  className="row m-3 potm">
                    

                    <div className="col-sm-2"></div>
                    <div  className="col-sm-4 p-4  " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                    <center>  <h2 className="p-4 mr-4 ml-4 ">Add Teacher</h2>
                                
                                <img className="imgresp" src={workicon} /></center>
                          
                        
                      



                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 p-4 " className=" shadow p-5 mb-5 bg-white rounded pmain ">

                    <center>

                        <h2 className="p-4">View all Teachers</h2>
                           <img className="imgresp" src={checkicon} />
                      </center>
                    </div>
                   


                </div>


                <div className="row m-3">

                    <div className="col-sm-2"></div>
                    <div  className="col-sm-4 p-4  " className=" shadow p-5 mb-5 bg-white rounded pmain " >
                       <center>

                       <h2 className="p-4">View all students</h2>
                               
                          
                               <img className="imgresp" src={checkicon} />
                         

                       </center>
                              



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
