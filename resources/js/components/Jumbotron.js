import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cover from './images/Cover.png'
import {Button} from 'react-bootstrap'  

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="row up px-4 pt-5 pb-5">
                <div className="col-sm-6 ">
                    <h1 className="display-5 tw animated shake">Gestion Scolarite</h1>
                    <p className="decription animated shake">
                        gestion de scolarite est une application web
                        qui permetre aux etudiant ,enseignent et adminstrateur
                        des ecloes de gerer leur ecole.
                    </p>
                    <button id="btnlog" className="btnl  glow-on-hover animated swing ">Login</button >
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5 ">
                    <img className="img-fluid animated  " src={cover} />
                </div>
            </div>
        );
    }
}

