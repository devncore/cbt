import { alertTitleClasses } from '@mui/material';
import React from 'react';
import Button from "@mui/material/Button";
import GoogleLoginBtn from './GoogleLoginBtn.jsx';

export default function Login(props) {

    window.location.href = process.env.REACT_APP_SERVICE_URL + "/Identity/Account/Login?ReturnUrl=~/cbt";
    const loginClick = (e) => {
    }

    return (
        <>
        </>
        // <div>
        //     <h1>로그인</h1>
        //     <Button 
        //         variant="contained"
        //         onClick={loginClick}
        //         children="로그인"/>
        // </div>
    );
}