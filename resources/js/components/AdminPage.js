import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'react-bootstrap';
import Core from './CoreAdmin';
import img from './teacher.png'

export default class AdminPage extends Component {
render() {
return (
        <div className="mt-5">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-2" onClick={()=> {
                    console.log("Yuupi");
                    if (document.getElementById('root')) {
                    ReactDOM.render(
                    <Core />, document.getElementById('root'));
                    }
                    }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Ajouter Etudiant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Ajouter Etudiant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Ajouter Etudiant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-3"></div>
                <div className="col-sm-2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Ajouter Etudiant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Ajouter Etudiant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-4"></div>
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