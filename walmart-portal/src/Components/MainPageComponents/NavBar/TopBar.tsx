import { Dispatch, SyntheticEvent } from "react"
import { useHistory } from "react-router-dom"
import { ActionType, IAction } from "../../../Redux/Reducer-logic/ActionStructure"
import { State } from "../../../Redux/State-logic/Store"
import {useSelector} from 'react-redux';
import * as ReactRedux from 'react-redux';
import './TopBar.css'
import { axiosLogout } from "./LogOut";
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { axiosGetAll } from "./GetAll";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        loggerOut: (incomingPayload: any) => { dispatch({ type: ActionType.LOGOUT, payload: incomingPayload }) },
        getAll: (incomingPayload: any) => { dispatch({ type: ActionType.ALL, payload: incomingPayload }) },
    }
}

const mapStateToProps = (state: any) => {
    return {
        seekOtherUser: state.myStateReducer.otherUser
    }
}

interface IProps {
    loggerOut: any,
    getAll: any,
}

/**
 * @description Elaborates the navegation bar. It set all the links for the differents views
 * @param props 
 * 
 */
const TopbarCore: React.FunctionComponent<IProps> = (props: IProps) => {
    
    const state = useSelector((state: State) => state.myStateReducer);
    const classes = useStyles();
    const history = useHistory();

    const logout = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        const exit = await axiosLogout()
        props.loggerOut(exit);
        history.push('/');
    }

    const getall = async (e: SyntheticEvent) => {
        e.preventDefault();

        const all = await axiosGetAll()
        props.getAll(all);
        history.push('/allStudents');
    }

    const gohome = async () => {
        history.push('/main');
    }

    const newStu = async () => {
        history.push('/newStudent');
    }

    const goprofile = async () => {
        history.push('/profile');
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Welcome {state.currentAdmin?.lastName}, {state.currentAdmin?.firstName}
                    </Typography>
                    <Button color="inherit" onClick = {newStu}>New Student</Button>
                    <Button color="inherit" onClick = {getall}>Students</Button>
                    <Button color="inherit" onClick = {gohome}>Home</Button>
                    <Button color="inherit" onClick = {goprofile}>Profile</Button>
                    <Button color="inherit" onClick = {logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </>
      );
    };
    
    
    export const Topbar = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TopbarCore);
