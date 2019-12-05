import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import student from './images/student.png'
import admin from './images/admin.png'
import teacher from './images/teacher.png'
const text1=<h3 className="display-6 ">The student can check his notes. </h3>
const text2=<h3 class="display-6 " >The admintrator can manage the notes of students. </h3>
const text3=<h3 class="display-6" >The teacher can put the notes of students. </h3>

export default class Slide extends Component{
    render(){
        return (
            <div className="row mt-5">
                <div className="col-sm-7 "> <img src={this.props.ImgS} className="img-fluid " /></div>
                <div className="col-sm-5 pt-5 "> {this.props.textG}
                </div>
            </div>
        );

    };
}

if (document.getElementById('slide1')){
    ReactDOM.render(<Slide textG={text1} ImgS={student} />,document.getElementById('slide1'));
}

if (document.getElementById('slide2')){
    ReactDOM.render(<Slide textG={text2} ImgS={admin} />,document.getElementById('slide2'));
}

if (document.getElementById('slide3')){
    ReactDOM.render(<Slide textG={text3} ImgS={teacher} />,document.getElementById('slide3'));
}
