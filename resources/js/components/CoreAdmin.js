import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ListGroup} from 'react-bootstrap';
import AdminPage from './AdminPage';
import AddStudentForm from './AddStudentForm';
import NavbarProfile from './NavbarProfile';


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
                                }}>Retour</button>
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
                    <div className="col-sm-8">
                        <AddStudentForm  name={this.props.name} />
                    </div>
                   
                </div>
            </div>
        );
    }
}