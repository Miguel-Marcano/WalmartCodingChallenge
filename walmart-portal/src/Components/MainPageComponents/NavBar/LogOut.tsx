import { IAdmin } from '../../../Redux/State-logic/StateStructure';
import axios from 'axios';
import { url } from '../../../Redux/Reducer-logic/Reducer';

/**
 * 
 * @returns remove the current admin from our redux state. This will protect our page from being redirected if no user is logged in. 
 */
export const axiosLogout = async () => {
    const axiosPayLoad: any = await axios.delete(url + '/admin-service/logout');
    const axiosData: IAdmin = axiosPayLoad.data;
    return axiosData;
}

