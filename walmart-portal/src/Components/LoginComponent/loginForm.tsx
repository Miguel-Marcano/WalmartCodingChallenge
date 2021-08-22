import { IAdmin } from '../../Redux/State-logic/StateStructure';
import { Dispatch } from "react";
import { ActionType, IAction } from "../../Redux/Reducer-logic/ActionStructure";
import {useHistory} from 'react-router-dom';
import React, { useState, SyntheticEvent } from 'react';
import * as ReactRedux from 'react-redux';
import "./login.css";
import { axiosLogin } from './login-helper';

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    //let's extract only the functionality we need to use
    return {
        onLogIn: (incomingPayload: IAdmin) => { dispatch({ type: ActionType.LOGIN, payload: incomingPayload }) },
    }
}

const mapStateToProps = (state: any) => {
//logic goes here
//said logic will extract the NECESSARY state you need, to simplify the component
    return {
        seekUser: state.myStateReducer.currentUser,
        seekAdmin: state.myStateReducer.currentAdmin
    }
}

interface IProps {
    onLogIn: any,
    stateAdmin: IAdmin
}

/**
 * @description Take the parameters from the form and send those two vales to the database to check if they admin exits 
 * @param props 
 * @returns Admin information if exists
 */
const Login: React.FunctionComponent<IProps> = (props: IProps) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        const something = await axiosLogin(username, password)
        
        if (something.username != null)
        {
            props.onLogIn(something);
            history.push('/main');
        }
    }

    return (
        <body style={{backgroundColor: "lightskyblue"}}>
        <div id="login">
            <h3 className="text-center text-white pt-5">Student Portal (Admin POV)</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br></br>
                                    <input type="text" name="username" id="username" className="form-control" onChange={e => setUsername(e.target.value)} value={username}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br></br>
                                    <input type="password" name="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br>
                                    <input onClick={login} type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                    <a href="/register" className="text-info" style={{marginLeft: '350px'}}>Register here</a>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export const LoginComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Login);


