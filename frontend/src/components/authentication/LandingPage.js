import React from "react";
import "./LandingPage.css"
import { Button, Image } from "@mantine/core";
import { IconLogin, IconLogout, IconRegistered } from "@tabler/icons-react";
import { Link } from "react-router-dom";
function LandingPage(){
    return(
        <div className="landing-wrapper">
            <Image src="car booking logo light.png" height='120px' width='120px' />
            <h1 className="landing-title">CAR BOOKING APP</h1>
            <p className="landing-subtitle">Welcome to the car booking app. <br/> Explore and find the best rental choice made just for you.</p>
            <hr/>
            <p>Get started</p>
            <div style={{display:'flex'}}>
                <Button leftIcon={<IconLogin/>} radius="md" variant="default"><Link to="../login" style={{textDecoration:'none', color:'black'}}>Login</Link></Button>
                <Button leftIcon={<IconLogout/>} radius="md" style={{marginLeft:5}} color="lime"><Link to="../signup" style={{textDecoration:'none', color:'white'}}>Sign up</Link></Button>

            </div>
        </div>
    )
}

export default LandingPage