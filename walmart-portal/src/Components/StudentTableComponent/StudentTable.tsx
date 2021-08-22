import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import {Topbar} from '../MainPageComponents/NavBar/TopBar'
import { State } from '../../Redux/State-logic/Store';
import {useSelector} from 'react-redux';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150, },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'DoB',
    headerName: 'Date of Birth',
    width: 200,
    editable: true,
  },
  {
    field: 'Address',
    headerName: 'Address',
    width: 150,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'State',
    headerName: 'State',
    width: 150,
    editable: true,
  },
  {
    field: 'Country',
    headerName: 'Country',
    width: 150,
    editable: true,
  },
  {
    field: 'ZipCode',
    headerName: 'ZipCode',
    width: 150,
    editable: true,
  },
];

/**
 * Populate he table with all the students that are currently stored in the redux state.
 */
export default function DataTable() {
    const state = useSelector((state: State) => state.myStateReducer);

    let rowsu: any[] = [];
    //let idt: number = 1;
    
    if(state.currentStudents != null){
        state.currentStudents.map(function(x) {
            const row = 
                {id: x.userId, firstName: x.firstName, lastName: x.lastName, DoB: x.dob, Address: x.address, Email: x.email, State: x.state, Country: x.country, ZipCode: x.zip_code}
                rowsu.push(row);
            return row;
         });
    }
    


  return (
    <body style={{backgroundColor: "lightskyblue"}}>
        <Topbar/>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rowsu}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
    </body>
  );
}