import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ListGroup} from 'react-bootstrap';
import AddStudentForm from './AddStudentForm';
import StudentPage from './StudentPage';
import MarkStudent from './MarkStudent';


export default class CoreStudent extends Component {
    render() {
        return (
            <div>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <div className="row">
                            <button className="MyButton mr-4 " onClick={()=> {
                                if (document.getElementById('student')) {
                                ReactDOM.render(
                                <StudentPage />, document.getElementById('student'));
                                }
                                }}>Retour</button>
                        </div>
                        <div className="row MyButton">
                            <ListGroup>
                                <ListGroup.Item>
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
                    <div className="col-sm-8">
                        <MarkStudent />
                    </div>
                </div>
            </div>
        );
    }
}