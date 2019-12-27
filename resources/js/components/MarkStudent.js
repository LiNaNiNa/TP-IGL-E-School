import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'react-bootstrap';
import axios from 'axios'

export default class MarkStudent extends Component {
    constructor(props){
        super(props);
        this.state = { notes: [],};
    }

 /*   ShowRow(module){
        return(
            <tr>
            <td>module.code_Mat</td>
            <td>module.CC</td>
            <td>module.CI</td>
            <td>module.TP</td>
            <td>module.CF</td>
            </tr>
        )
    }

    modules(){
        var List ;/*
        for (var mod in this.state.notes)
        {
            List = List + this.ShowRow(mod);
        }
        return List;
        return this.ShowRow(this.state.notes[0]);
}*/

    componentDidMount(){

        
        var str = '/api/Marks/'+this.props.UserID;

        axios.get(str).then(response => {
            console.log(response);
            this.setState({
                notes: response.data.notes,
            });
            console.log(this.state.notes);
            console.log(response.data.notes);
          });
    }
    render() {
  
          const mods = this.state.notes.map((modul) =>             
          <tr>
          <td>{modul.Code_Mat}</td>
          <td>{modul.CC}</td>
          <td>{modul.CI}</td>
          <td>{modul.TP}</td>
          <td>{modul.CF}</td>
          </tr> )

        return (
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Module</th>
                <th>CC</th>
                <th>CI</th>
                <th>TP</th>
                <th>CF</th>
                </tr>
            </thead>
            <tbody>

{mods}

            </tbody>
            </Table>
        );
    }
/*
    render() {
        var stud = 1 ;
        var str = '/api/Marks/'+stud;

        axios.get(str).then(response => {
            console.log(response);
            this.setState({
              notes: response.data
            })
          })

        return (
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Module</th>
                <th>CC</th>
                <th>CI</th>
                <th>TP</th>
                <th>CF</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
            </Table>
        );
    }    */
}

