import React from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { margin, padding, textAlign } from "@mui/system";
import { Container, Divider, Stack, Typography } from "@mui/material";
import Cookies from 'universal-cookie';
import NcoreSelect from "../components/input/NcoreSelect";
import { MenuItem } from "@mui/material";

export default function Profile(props) {
    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();
    const history = useHistory();
    let id = new URLSearchParams(location.search).get('id');

    React.useEffect(() => {
        id = new URLSearchParams(location.search).get('id');
        console.log('profileId:', id);

        const data = {
            "userId": id,
            "token": token
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods': '*',
            }
        };

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/account/get/user', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({
                        id: data.id,
                        userName: data.userName,
                        userId: data.UserId,
                        email: data.email,
                        phone: data.phone,
                        name: data.name,
                        school: data.school,
                        gitHubId: data.gitHubId,
                        blog: data.blog,
                        aboutMe: data.aboutMe,
                        certificate: data.certificate 
                });
            console.log('datas');
          })
          .catch(function (error) {
            console.log(error);
        });
          
    }, []);

    return (
        <div className={"hstyle"}>
            <div >
                <Stack spacing={1}>
                    <div className={"stylestxt1"}>User Profile</div>
                    <div className={"stylestxt2"}>?????????</div>
                    <div className={"stylestxt3"}>{userInfo.id}</div>
                    <Typography variant="caption">
                        ID ???????????????.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"??????"}</div>
                    <div className={"stylestxt3"}>{userInfo.userName}</div>
                    <Typography variant="caption">
                        ????????? ?????? ?????????.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"?????????"}</div>
                    <div className={"stylestxt3"}>{userInfo.phone}</div>
                    <Typography variant="caption">
                        ????????? ???????????????.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"?????????"}</div>
                    <div className={"stylestxt3"}>{userInfo.email}</div>
                    <Typography variant="caption">
                        ????????? ???????????????.
                    </Typography>
                    <Divider/>
                    <NcoreSelect 
                        enabled
                        title="?????? List" 
                        defaultValue={userInfo.school}>
                        <MenuItem value={userInfo.school}>{userInfo.school}</MenuItem>
                    </NcoreSelect>
                    <Typography variant="caption">
                        ????????? ???????????? ????????? ??? ????????????.
                    </Typography>
                    <Divider/>
                    <NcoreSelect 
                        enabled
                        title="????????? List" 
                        defaultValue={userInfo.certificate}>
                        <MenuItem value={userInfo.certificate}>{userInfo.certificate}</MenuItem>
                    </NcoreSelect>
                    <Typography variant="caption">
                        ???????????? ???????????? ????????? ??? ????????????.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"?????????"}</div>
                    <div className={"stylestxt3"}>{userInfo.gitHubId}</div>
                    <Typography variant="caption">
                        Github ????????? ?????? ?????????.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"?????????"}</div>
                    <div className={"stylestxt3"}>{userInfo.blog}</div>
                    <Typography variant="caption">
                        ????????? ???????????????.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"AboutMe"}</div>
                    <div className={"stylestxt3"}>{userInfo.aboutMe}</div>
                    <Typography variant="caption">
                        ???????????? ???????????????.
                    </Typography>
                    <Divider/>
                </Stack>
            </div>
        </div>
    );
}