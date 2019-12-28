import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { formik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.css"
import axios from 'axios'
import AdminPage from './AdminPage';

export default class AddStudentForm extends Component {
    render() {
        return (
            <Formik initialValues={{ firstName: "", lastName: "", dateDeNaissance: "", promo: "", section: "", groupe: 0, }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(120, 'Must be shorter than 120 letters')
                        .min(3, 'Must contains at least 3 letters')
                        .required('Required'), 
                    lastName: Yup.string()
                        .max(120, 'Must be shorter than 120 letters')
                        .min(3, 'Must contains at least 3 letters')
                        .required('Required'),                     
                    dateDeNaissance: Yup.date() 
                        .max(new Date(),"Error! The student is too young") 
                        .min(new Date(1950,10,10),"Error! The student is too old")
                        .required('Required'), 
                    promo: Yup.string()
                        .oneOf(["1CP", "2CP", "1CS", "2CS", "3CS"], 'INVALID VALUE')
                        .required('Required'), 
                    section: Yup.string()
                        .max(2, 'Maximum Two caracters!')
                        .required('Required'), 
                    groupe: Yup.number()
                        .max(50, 'iVerify the entred number')
                        .min(1, 'Must be at least one group')
                        .required('Required'),
                })} onSubmit={(values,
                    { setSubmitting }) => {
                    const data = {
                        NomEtu: values.lastName,
                        PrenomEtu: values.firstName,
                        Date: values.dateDeNaissance,
                        Promo: values.promo,
                        Sect: values.section,
                        Gr: values.groupe,
                    };

                    console.log(data);

                    axios.post('/api/AddEtud', data)
                        .then(response => {
                            // redirect to the homepage
                            //history.push('/')
                            console.log(response);
                            if (response.status ==200)
                            {
                                alert("Student Inserted!");
                                if (document.getElementById('pageprin')) {
                                    ReactDOM.render(<AdminPage UserID={Cookies.get("UserID")} name={Cookies.get("Username")} Token={Cookies.get("Token")} />, document.getElementById('pageprin'));            
                                }

                                /*if (document.getElementById('root')) {
                                    ReactDOM.render(
                                    <AdminPage name={this.props.name}/>, document.getElementById('root'));
                                    console.log("True");
                                    }  */                              
                            }
                        })
                        .catch(error => {
                            /*this.setState({
                            errors: error.response.data.errors
                            })*/
                            alert("Error during the operation, Please try again.");
                            console.log(error.response.data.errors);
                            if (document.getElementById('pageprin')) {
                                ReactDOM.render(<AdminPage UserID={Cookies.get("UserID")} name={Cookies.get("Username")} Token={Cookies.get("Token")} />, document.getElementById('pageprin'));            
                            }                            
                        });

                    console.log("FIN");
                }
                }
            >
                <Form>

                    <label htmlFor="firstName">Nom de Famille:</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Prenom:</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="dateDeNaissance">Date de naissance</label>
                    <Field name="dateDeNaissance" type="date" required="required" />
                    <ErrorMessage name="dateDeNaissance" />

                    <label htmlFor="promo">Promo</label>
                    <Field name="promo" type="text" />
                    <ErrorMessage name="promo" />

                    <label htmlFor="section">Section</label>
                    <Field name="section" type="text" />
                    <ErrorMessage name="section" />

                    <label htmlFor="groupe">Groupe</label>
                    <Field name="groupe" type="number" />
                    <ErrorMessage name="groupe" />

                    <br></br>
                    <button type="submit">Submit</button>

                </Form>
            </Formik>
        );
    }
}
