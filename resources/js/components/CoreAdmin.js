import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ListGroup} from 'react-bootstrap';
import AdminPage from './AdminPage';
import AddStudentForm from './AddStudentForm';


export default class CoreAdmin extends Component {
    render() {
        return (
            <div>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <div className="row">
                            <button className="MyButton mr-4 " onClick={()=> {
                                console.log("YUUUUUUUUUUUUUUUUUUUUUUUUUUUUpii");
                                if (document.getElementById('root')) {
                                ReactDOM.render(
                                <AdminPage />, document.getElementById('root'));
                                //ReactDOM.render(<h1>LINA</h1>, document.getElementById('root'));
                                }
                                }}>Retour</button>
                        </div>
                        <div className="row MyButton">
                            <ListGroup>
                                <ListGroup.Item>
                                    Ajouter un Etudiant
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Ajouter un Enseignant
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Afficher la liste des etudiants
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Creer l'EDT
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Afficher les enseignants
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <AddStudentForm />
                    </div>
                </div>
            </div>
        );
    }
}