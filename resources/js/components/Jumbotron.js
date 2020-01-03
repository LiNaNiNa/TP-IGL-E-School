import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cover from './images/Cover.png'
import { Button } from 'react-bootstrap'

export default class Jumbotron extends Component {
    render() {
        return (


            <div className="row up px-4 pt-5 pb-5">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className="col-sm-6 ">
                    <h1 className="display-5 tw animated shake">MySchool</h1>
                    <p className="decription animated shake">
                       <b> MySchool</b> is a virtual School manager via the internet. It assists all the functions any educational member want to do: from making agendas to sending feedbacks.
                    </p>
                    <button id="btnlog" dusk="Login-Button" className="btnl  glow-on-hover animated swing ">Login</button >
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5 ">
                    <img className="img-fluid animated  " src={cover} />
                </div>
            </div>
        );
    }
}

