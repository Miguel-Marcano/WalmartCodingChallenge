import { IStudents } from '../../../Redux/State-logic/StateStructure';
import axios from 'axios';
import { url } from '../../../Redux/Reducer-logic/Reducer';

/**
 * 
 * @returns An array of all the students saved on the database
 */
export const axiosGetAll = async () => {
    const axiosPayLoad: any = await axios.get(url + '/student-service/getallstudents');
    const axiosData: IStudents = axiosPayLoad.data;
    console.log(axiosData)
    return axiosData;
}