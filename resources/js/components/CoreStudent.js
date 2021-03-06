import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ListGroup} from 'react-bootstrap';
import StudentPage from './StudentPage';
import NavbarProfile from './NavbarProfile';
import MarkStudent from './MarkStudent';


export default class CoreStudent extends Component {
    render() {
        return (
            <div>
                <NavbarProfile name={this.props.name}/>
                <div className="row ">
                    <div className="col-sm-4">
                    <div className="pl-4"> 
                        <div className="row">
                            <button className="MyButton lb " onClick={()=> {
                                if (document.getElementById('pageprin')) {
                                ReactDOM.render(
                                <StudentPage UserID={this.props.UserID} name={this.props.name} Token={this.props.Token} />, document.getElementById('pageprin'));
                                }
                                }}>Retour  <i className="fas  fa-undo-alt ml-2"></i></button>
                        </div>
                        <div className="row MyButton  ">
                            <ListGroup >
                                <ListGroup.Item variant="dark">
                                    Show Marks
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Show Schedule
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Review Courses
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Deposit Work
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Checking TD
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-8 ">
                        <div className="pr-3">  <MarkStudent UserID={this.props.UserID} name={this.props.name} Token={this.props.Token} /></div>
                      
                    </div>
                </div>
            </div>
        );
    }
}