/* eslint-disable jsx-a11y/img-redundant-alt */
import { Dispatch } from "react";
import { ActionType, IAction } from "../../Redux/Reducer-logic/ActionStructure";
import {useHistory} from 'react-router-dom';
import React, { useState, SyntheticEvent } from 'react';
import * as ReactRedux from 'react-redux';
import { IStudents } from "../../Redux/State-logic/StateStructure";
import './NewStudent.css';
import { axiosCreate } from "./NewStudentHelper";
import {Topbar} from '../MainPageComponents/NavBar/TopBar'

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        onSignUp: (incomingPayload: IStudents) => { dispatch({ type: ActionType.CREATE, payload: incomingPayload }) },
    }
}

const mapStateToProps = (state: any) => {
    return {
        seekUser: state.myStateReducer.currentUser,
        seekAdmin: state.myStateReducer.currentAdmin
    }
}


interface IProps {
    onSignUp: any,
    stateStudents: IStudents
}

/**
 * 
 * @param props 
 * @returns a new student object that is appended to our redux state
 */
const SignUp: React.FunctionComponent<IProps> = (props: IProps) => {
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zip_code, setZipCode] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");

    const signup = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        const newStu = await axiosCreate(username, firstName, middleName, lastName, password, email, address, state, country, zip_code, dob)
        
        if (newStu.username != null)
        {
            console.log(newStu);
            //states.currentStudents?.push(newStu);
            props.onSignUp(newStu);
            history.push('/main');
        }
    }

    return (
        <>
        <Topbar/>
        <section style={{backgroundColor: "lightskyblue"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                alt="Sample photo"
                className="img-fluid"
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Student registration form</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" onChange={e => setMiddleName(e.target.value)} value={middleName}/>
                      <label className="form-label" htmlFor="form3Example1n">Middle name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" onChange={e => setLastName(e.target.value)} value={lastName}/>
                      <label className="form-label" htmlFor="form3Example1m1">Last name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" onChange={e => setUsername(e.target.value)} value={username}/>
                      <label className="form-label" htmlFor="form3Example1n1">Username</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" onChange={e => setPassword(e.target.value)} value={password}/>
                  <label className="form-label" htmlFor="form3Example8">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" onChange={e => setAddress(e.target.value)} value={address}/>
                  <label className="form-label" htmlFor="form3Example8">Address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" className="form-control form-control-lg" onChange={e => setDob(e.target.value)} value={dob}/>
                  <label className="form-label" htmlFor="form3Example9">DOB</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" onChange={e => setState(e.target.value)} value={state}/>
                  <label className="form-label" htmlFor="form3Example90">State</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" onChange={e => setCountry(e.target.value)} value={country}/>
                  <label className="form-label" htmlFor="form3Example99">Country</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" onChange={e => setZipCode(e.target.value)} value={zip_code}/>
                  <label className="form-label" htmlFor="form3Example99">Zip Code</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" onChange={e => setEmail(e.target.value)} value={email}/>
                  <label className="form-label" htmlFor="form3Example97">Email</label>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button onClick={signup} type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )
}

export const SignUpComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SignUp);