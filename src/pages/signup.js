import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ARButton from "../config/compunents/button";
import ARInput from "../config/compunents/input";
import signUpUser from "../config/firebase/firebasemethod";


function Fbsignup() {

    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);

    let userSignUp = () => {
        if (!userObj.email) {
            alert("Email is requierd")
            return;
        }
        if (!userObj.password || userObj.password.length < 6) {
            alert("password Required Must be 6 Charecters")
            return;
        }
        setLoader(true);
        console.log(userObj);

        signUpUser(userObj)
            .then((res) => {
                setLoader(false);
                console.log(res)
            }).catch((err) => {
                setLoader(false);
                console.log(err)
            });
    };

    return (
        <>
            <Box>
                <Typography sx={{ padding: 3 }} variant="h2">Sign Up</Typography>
                <Box sx={{ padding: 1 }}>
                    <ARInput
                        onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
                        label="Name"
                        type="text"
                        required="true" />
                </Box>
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
                        onClick={userSignUp}
                        label="Sign Up" />
                </Box>
            </Box>
        </>
    )
}

export default Fbsignup;