//MY APPLICATION'S STATE MODEL
export interface IAppState {
    currentStudents: IStudents[] | null;
    currentAdmin: IAdmin | null;
}

//SUPPORTING STATE MODELS
export interface IStudents{
    userId: number;
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    profilePicture: string;
    email: string;
    address: string;
    state: string;
    country: string;
    zip_code: string;
    dob: string;
}

export interface IAdmin{
    userId: number;
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    profilePicture: string;
    email: string;
    address: string;
    state: string;
    country: string;
    zip_code: string;
    dob: string;
    password: string;
}

export const initialState: IAppState = {
    currentStudents: null,
    currentAdmin: null
}