import React from 'react';
import './App.css';
import { Dispatch } from "react";
import { IAction } from './Redux/Reducer-logic/ActionStructure';
import * as ReactRedux from 'react-redux';
import { IStudents, IAdmin } from './Redux/State-logic/StateStructure';
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginComponent } from './Components/LoginComponent/loginForm'
import MainMenu from './Components/MainPageComponents/MainPage';
import DataTable from './Components/StudentTableComponent/StudentTable'
import { SignUpComponent } from './Components/NewStudent/NewStudent';
import { ProfileComponent } from './Components/ProfilePageComponents/ProfilePage';

const mapStateToProps = (state: any) => {


  return {
    seekUser: state.myStateReducer.currentUser,
    seekAdmin: state.myStateReducer.currentAdmin
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {

  return {
  }
}


interface IProps {
  seekUser?: IStudents|null
  seekAdmin?: IAdmin|null
}

function CoreApp(props: IProps) {
  return (
    <BrowserRouter>
      {<Route path="/" exact component={LoginComponent} />}
      <Route path="/main" component={(props.seekAdmin?.username == null) ? LoginComponent : MainMenu} />
      <Route path="/allStudents" component={(props.seekAdmin?.username == null) ? LoginComponent : DataTable} />
      <Route path="/newStudent" component={(props.seekAdmin?.username == null) ? LoginComponent : SignUpComponent} />
      <Route path="/profile" component={(props.seekAdmin?.username == null) ? LoginComponent : ProfileComponent} />
    </BrowserRouter>
  );
}

export const App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CoreApp);


export default App;
