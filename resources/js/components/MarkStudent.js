import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class MarkStudent extends Component {
    constructor(props){
        super(props);
        this.state = { notes: [], done:false};

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
                
                   <div className="loader cp "></div>
               
               
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
                    <table className="table table-dark table-hover mr-2 ">
                    <thead>
                        
                        <tr >
                        <th>Module</th>
                        <th>CC</th>
                        <th>CI</th>
                        <th>TP</th>
                        <th>CF</th>
                        <th>MOY</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            
                        
        
                        {
                            this.state.notes.map((modul) =>   
                            
                            <tr className={(modul.Moy<10)? 'table-danger':'table-success' } >
                            <td>{modul.Code_Mat}</td>
                            <td>{modul.CC}</td>
                            <td>{modul.CI}</td>
                            <td>{modul.TP}</td>
                            <td>{modul.CF}</td>
                            <td>{modul.Moy} </td>
                            </tr> 
                            )
                        }
                    </tbody>
                    </table>
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

