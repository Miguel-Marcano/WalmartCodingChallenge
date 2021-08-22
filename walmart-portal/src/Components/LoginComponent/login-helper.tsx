import { IAdmin } from '../../Redux/State-logic/StateStructure';
import axios from 'axios';
import { url } from '../../Redux/Reducer-logic/Reducer';

/**
 * @description Axios function to search the admin object in our databse
 * @param username string
 * @param password string
 * @returns JSON object with the admin information
 */
export const axiosLogin = async (username : string, password : string) => {
    const axiosResponse: any = await axios.post(url + '/admin-service/getadmin', {
        "username": username,
        "password": password
    })
    const axiosData: IAdmin = axiosResponse.data;
    console.log(axiosData)
    return axiosData;
}