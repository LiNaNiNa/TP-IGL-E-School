import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'react-bootstrap';
import axios from 'axios'

export default class MarkStudent extends Component {
    constructor(props){
        super(props);
        this.state = { notes: [], done:false,};

        var str = '/api/Marks/'+this.props.Token;

        axios.get(str).then(response => {
            console.log(response);
            this.setState({
                notes: response.data.notes,
                done:true
            });
            console.log(this.state.notes);
            console.log(response.data.notes);
          });
                  
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

    componentWillMount(){        

    }
    
    render() {
        if (this.state.done == false)
        {
            return(
                <h1>We are looking for your marks in the our Data Base. Please be patient ^^ </h1>
            )            
        }
        else
        {
            if (this.state.notes.length==0)
            {
                return(
                    <h1>There are no marks available! Please check again in the upcoming hours :)</h1>
                )
            }
            else
            {
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
        
                        {
                            this.state.notes.map((modul) =>             
                            <tr>
                            <td>{modul.Code_Mat}</td>
                            <td>{modul.CC}</td>
                            <td>{modul.CI}</td>
                            <td>{modul.TP}</td>
                            <td>{modul.CF}</td>
                            </tr> 
                            )
                        }
                    </tbody>
                    </Table>
                );
            }
        }
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

