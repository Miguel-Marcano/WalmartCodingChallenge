import { Dispatch, useState, useEffect, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { ActionType, IAction } from "../../Redux/Reducer-logic/ActionStructure";
import { IAdmin } from "../../Redux/State-logic/StateStructure";
import * as ReactRedux from "react-redux";
import "./Profile.css";
import { Topbar } from "../MainPageComponents/NavBar/TopBar";
import { State } from "../../Redux/State-logic/Store";
import { useSelector } from "react-redux";
import axios from "axios";
import React from "react";
import { Storage } from "aws-amplify";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { url } from '../../Redux/Reducer-logic/Reducer';

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onUpdate: (incomingPayload: IAdmin) => {
      dispatch({ type: ActionType.LOGIN, payload: incomingPayload });
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    seekUser: state.myStateReducer.currentUser,
    seekAdmin: state.myStateReducer.currentAdmin,
  };
};

interface IProps {
  onUpdate: any;
  stateAdmin: IAdmin;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    })
  );

const Profile: React.FunctionComponent<IProps> = (props: IProps) => {

  const [image, setImage] = React.useState();
  const [images, setImages] = useState([]);
  const history = useHistory();
  const [imgName, setImgName] = useState();
  const state = useSelector((state: State) => state.myStateReducer);

  useEffect(() => {
    getImages(state.currentAdmin?.profilePicture);
  }, []);

  async function getImages(imgToSendd: any) {
    console.log("inside getImages function ");

    const imageKeyss: any = await Storage.list(imgToSendd);
    const imageKeyss2: any = await Promise.all(
      imageKeyss.map(async (k: any) => {
        const signedUrl = await Storage.get(k.key);
        return signedUrl;
      })
    );
    console.log("profile  ", imageKeyss2);
    setImages(imageKeyss2);
    return imageKeyss2;
  }

  const onSelectFile = (event: any) => {
    console.log("in select file");
    const reader: any = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    console.log("in event.target .....", event.target.files[0]);
    reader.addEventListener("load", () => {
      setImage(event.target.files[0]);
      const imgToSend = event.target.files[0];
      console.log("you selected: ", imgToSend.name);
      fetchImages(imgToSend);
    });
  };

  async function fetchImages(imgToSend1: any) {
    console.log("image ready to fetch is : ", imgToSend1);
    if (imgToSend1) {
      // Storage.put: uploads selected image  to s3 bucket
      Storage.put(imgToSend1.name, imgToSend1, {
        contentType: "image/png",
      });
      console.log("result from fetch:", imgToSend1);
      console.log("result from fetch name:", imgToSend1.name);
      const imageKeys: any = await Storage.list(imgToSend1.name);
      console.log("imageKeys 1:", imageKeys);
      const imageKeys2: any = await Promise.all(
        imageKeys.map(async (k: any) => {
          const signedUrl = await Storage.get(k.key);
          return signedUrl;
        })
      );
      console.log(
        "imageKeys uploading key-profileImageName :",
        imgToSend1.name
      );
      setImages(imageKeys2); // save file(image name + key) to state
      setImgName(imgToSend1.name);
    }
  }

  /**
   * 
   * Function to just update the profile picture of the admin user.
   */
  const savePic = async (e: SyntheticEvent) => {
    e.preventDefault();

    const axiosResponse: any = await axios.post(
      url + "/admin-service/update",
      {
        userid: state.currentAdmin?.userId,
        username: state.currentAdmin?.username,
        firstName: state.currentAdmin?.firstName,
        middleName: state.currentAdmin?.middleName,
        lastName: state.currentAdmin?.lastName,
        password: state.currentAdmin?.password,
        profilePicture: imgName,
        email: state.currentAdmin?.email,
        address: state.currentAdmin?.address,
        state: state.currentAdmin?.state,
        country: state.currentAdmin?.country,
        zip_code: state.currentAdmin?.zip_code,
        dob: state.currentAdmin?.dob,
      }
    );

    const axiosData: IAdmin = axiosResponse.data;
    console.log(axiosData);
    props.onUpdate(axiosData);
    history.push("/profile");
  };

  
  /**
   * Creation of the profile card to display the information of the current admin user
   */
  const classes = useStyles();
  return (
    <body style={{backgroundColor: "lightskyblue"}}>
      <Topbar />
      <div
        className="page-content page-container"
        id="page-content"
        style={{ marginLeft: "12%", marginTop: "8%" }}
      >
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div>
                      
                      {images.map((image) => (
                      <Avatar alt="Remy Sharp" src={image} key={image} className={classes.large} style={{margin: '0 auto' }}/>
                      ))}
                      <input //className="custom-file2-input"
                        type="file"
                        onChange={onSelectFile}
                      />
                        
                      <input
                        onClick={savePic}
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="Update"
                      />
                      </div>
                      <h6 className="f-w-600">
                        {state.currentAdmin?.firstName}{" "}
                        {state.currentAdmin?.lastName}
                      </h6>
                      <p>Admin</p>{" "}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email:</p>
                          <h6 className="text-muted f-w-400">
                            {state.currentAdmin?.email}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Address:</p>
                          <h6 className="text-muted f-w-400">
                            {state.currentAdmin?.address}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">State:</p>
                          <h6 className="text-muted f-w-400">
                            {state.currentAdmin?.state}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Country:</p>
                          <h6 className="text-muted f-w-400">
                            {state.currentAdmin?.country}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Zip Code:</p>
                          <h6 className="text-muted f-w-400">
                            {state.currentAdmin?.zip_code}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Date of Birth:</p>
                          <h6 className="text-muted f-w-400">
                            {state.currentAdmin?.dob}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export const ProfileComponent = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
