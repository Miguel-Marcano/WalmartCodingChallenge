import { IStudents } from '../../Redux/State-logic/StateStructure';
import axios from 'axios';
import { url } from '../../Redux/Reducer-logic/Reducer';

/**
 * 
 * @param username 
 * @param firstName 
 * @param middleName 
 * @param lastName 
 * @param password 
 * @param email 
 * @param address 
 * @param state 
 * @param country 
 * @param zipCode 
 * @param dob 
 * @returns the new student object that latter will be appended to the student list in our redux state
 */
export const axiosCreate = async (username : string, firstName : string, middleName : string, lastName : string, password : string, email : string, address : string, state : string, country : string, zipCode : string, dob : string) => {
    const axiosResponse: any = await axios.post(url + '/student-service/create', {
        "username": username,
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "password": password,
        "profilePicture": "default.png",
        "email": email,
        "address": address,
        "state": state,
        "country": country,
        "zip_code": zipCode,
        "dob": dob
        
    })
    const axiosData: IStudents = axiosResponse.data;
    console.log(axiosData)
    return axiosData;
}