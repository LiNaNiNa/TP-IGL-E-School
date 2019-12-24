import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import Core from './CoreAdmin';
import img from './teacher.png'

export default class AdminPage extends Component {
    render() {
        return (
            <div className="mt-5" >
                <div className="row m-3 " onClick={() => {
                console.log("Yuupi");
                if (document.getElementById('root')) {
                    ReactDOM.render(
                        <Core />, document.getElementById('root'));
                }
            }}>

                    <div className="col-sm-2"></div>
                    <div className="col-sm-7  " className=" shadow p-5 mb-5 rounded pmain  " >
                        <div className="row " >
                            <div className="col-sm-6 ">
                                <h2>Show Marks</h2>
                                <b>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</b>
                            </div>
                            <div className="col-sm-2 "></div>
                            <div className="col-sm-4 "> <img className="imgresp" src={img} /></div>
                        </div>



                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"></div>


                </div>


                <div className="row m-3 ">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " onClick={() => {
                        console.log("Yuupi");
                        if (document.getElementById('student')) {
                            ReactDOM.render(
                                <Core />, document.getElementById('student'));
                        }
                    }}>
                        <div className="row">
                            <div className="col-sm-4"> <img className="imgresp" src={img} /></div>
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
                    <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " onClick={() => {
                        console.log("Yuupi");
                        if (document.getElementById('student')) {
                            ReactDOM.render(
                                <Core />, document.getElementById('student'));
                        }
                    }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Review Courses</h2>
                                <b>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</b>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4"> <img className="imgresp" src={img} /></div>
                        </div>



                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"></div>


                </div>

                <div className="row m-3">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " onClick={() => {
                        console.log("Yuupi");
                        if (document.getElementById('student')) {
                            ReactDOM.render(
                                <Core />, document.getElementById('student'));
                        }
                    }}>
                        <div className="row">
                            <div className="col-sm-4"> <img className="imgresp" src={img} /></div>
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
                    <div className="col-sm-7 " className=" shadow p-5 mb-5 bg-white rounded pmain " onClick={() => {
                        console.log("Yuupi");
                        if (document.getElementById('student')) {
                            ReactDOM.render(
                                <Core />, document.getElementById('student'));
                        }
                    }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Check TD</h2>
                                <b>Some quick example text to build on the card title and make up the bulk of
                             the card's content.</b>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4"> <img className="imgresp" src={img} /></div>
                        </div>



                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"></div>


                </div>

            </div>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(
        <AdminPage />, document.getElementById('root'));
    //ReactDOM.render(<h1>LINA</h1>, document.getElementById('root'));
}