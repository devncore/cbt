import React from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom'

export default function Profile(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const location = useLocation();

    React.useEffect(() => {
        let id = new URLSearchParams(location.search).get('id');
        console.log('ID', id);

        const data = {
            "Id": id,
            "userName": "string",
            "email": "string"
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
        console.log('data1: ', data);
        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: data.userName,
                    email: data.email,
                    id: data.id
                });
            console.log('Users');
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    return (
        <div>
            USERS
            {userInfo != null ? 
                <div>
                    <div>{userInfo.userName}</div>
                    <div>{userInfo.email}</div>
                    <div>{userInfo.id}</div>
                </div>
            : null
            }
        </div>
    );
}