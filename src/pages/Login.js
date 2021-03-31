import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { UserContext } from '../shared/context/user-context';

import headerImg from '../images/img01.jpg';


import './Login.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.any.isRequired,
    index: PropTypes.any.isRequired
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Login() {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const user = useContext(UserContext);

    function onSubmitClick() {

    }

    return (

        <div className="login">
            {
                /*<img style={{height : 250 , width : "max-content"}} alt="" src={headerImg}/> */
            }
            <h3>
                Bienvenue dans le portail de gestion de cabinet medical !
            </h3>
            <div className="login-form">
                <Paper>
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={value}
                        variant="fullWidth"
                        onChange={handleChange}
                    >
                        <Tab label="Sign In" {...a11yProps(0)} />
                        <Tab label="New Account" {...a11yProps(1)} />
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                    <div className="tab-panel">
                    <div className="social-auth">
                        <FaFacebook color="#1877f2" style={{ padding: 10, width: "3em", height: "3em" }} />
                        <FcGoogle style={{ padding: 10, width: "3em", height: "3em" }} />
                        <FaLinkedin color="#0072b1" style={{ padding: 10, width: "3em", height: "3em" }} />
                    </div>
                    <TextField
                        required
                        id="user-email"
                        label="Email"
                        variant="outlined"
                        style={{ width: 300, padding: 10 }}
                    //   onChange={setUserEmail}
                    />

                    <TextField
                        required
                        id="user-password"
                        type="password"
                        label="Mot de passe"
                        variant="outlined"
                        style={{ width: 300, padding: 10 }}
                    // onChange={setUserPassword}
                    />

                    <ReCAPTCHA
                        sitekey="6Lchz5YaAAAAABIs83Pk61GM8KlsVs8Yt-6KzA2_"
                        //onChange={onChange}
                        style={{ padding: 10 }}
                    />
                    <Button style={{ width: 300, padding: 10 }} onClick={onSubmitClick} size="large" variant="contained" color="primary">
                        Se Connecter
                    </Button>
                    </div>
                </TabPanel>

                <TabPanel className="tab-panel" value={value} index={1}>

                </TabPanel>
                {
                    /*
                <h4>Se connecter avec</h4>
                <div className="social-auth">
                    <FaFacebook color="#1877f2" style={{ padding : 10 , width : "3em" , height : "3em"}}/>
                    <FcGoogle style={{ padding : 10 , width : "3em" , height : "3em"}}/>
                    <FaLinkedin color="#0072b1" style={{ padding : 10 , width : "3em" , height : "3em"}}/>
                </div>
                <TextField
                    required
                    id="user-email"
                    label="Email"
                    variant="outlined"
                    style={{width : 300 , padding : 10}}
                //   onChange={setUserEmail}
                /> 
     
                <TextField
                    required
                    id="user-password"
                    type="password"
                    label="Mot de passe"
                    variant="outlined"
                    style={{width : 300 , padding : 10}}
                // onChange={setUserPassword}
                />   
                 
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    //onChange={onChange}
                    style={{padding : 10}}
                />
                <Button style={{width : 300 , padding : 10}} onClick={onSubmitClick} size="large" variant="contained" color="primary">
                    Se Connecter
                </Button> 
                */
                }
            </div>
        </div>

    )

}