import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import student from './images/student.png'
import admin from './images/admin.png'
import teacher from './images/teacher.png'


export default class Slide extends Component{
    render(){
        return (
            <div className="row mt-5"> 
                <div className="col-sm-7 "> <img src={this.props.ImgS} className="img-fluid " /></div>
                <div className="col-sm-5 pt-5 cp mt-5"> {this.props.textG}
                {this.props.textP}
                </div>
            </div>
        );

    };
}

