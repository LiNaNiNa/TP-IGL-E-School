import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ListGroup} from 'react-bootstrap';
import AdminPage from './AdminPage';
import AddStudentForm from './AddStudentForm';
import NavbarProfile from './NavbarProfile';
import addicon from './images/Add.png';

export default class CoreAdmin extends Component {
    render() {
        return (
            <div>
                <NavbarProfile name={this.props.name} />
                <div className="row mt-3">
                   
                    <div className="col-sm-4" >
                    <div className="pl-4">
                        <div className="row">
                            <button dusk="AdminRetour" className="MyButton lb mr-4 " onClick={()=> {
                                console.log("YUUUUUUUUUUUUUUUUUUUUUUUUUUUUpii");
                                if (document.getElementById('pageprin')) {
                                ReactDOM.render(
                                <AdminPage name={this.props.name} />, document.getElementById('pageprin'));
                                //ReactDOM.render(<h1>LINA</h1>, document.getElementById('root'));
                                }
                                }}>Retour <i className="fas  fa-undo-alt ml-2"></i></button>
                        </div>
                        <div className="row MyButton">
                            <ListGroup>
                                <ListGroup.Item variant="dark">
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
                    </div>
                    <div className="col-sm-5">
                        <AddStudentForm  name={this.props.name} />
                    </div>
                    <div className="col-sm-3">
                    <img className="imgresp " src={addicon} />

                    </div>
                   
                </div>
            </div>
        );
    }
}