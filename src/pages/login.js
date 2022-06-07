import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ARButton from "../config/compunents/button";
import ARInput from "../config/compunents/input";
import loginUser from "../config/firebase/firebasemethod";

function Login() {

    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);


    let userLogin = () => {
        console.log(userObj);
       
    };

    return (
        <>
            <Box>
                <Typography sx={{ padding: 3 }} variant="h2">Login</Typography>
                <Box sx={{ padding: 1 }}>
                    <ARInput
                        onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
                        label="Email"
                        type="email"
                        required="true" />
                </Box>
                <Box sx={{ padding: 1 }}>
                    <ARInput
                        onChange={(e) => setUserObj({ ...userObj, password: e.target.value })}
                        label="Password"
                        type="password"
                        required="true" />
                </Box>
                <Box sx={{ padding: 1 }}>
                    <ARButton
                        loading={loader}
                        onClick={userLogin}
                        label="Login" />
                </Box>
            </Box>
        </>
    )
};


export default Login;