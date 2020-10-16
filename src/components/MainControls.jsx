import React from "react";
import {Button} from "@material-ui/core"
import {Link, BrowserRouter as Router} from "react-router-dom"


export default function StableInfo(props) {

    
// <Link to="/test3">Test 3</Link> --------- to the buttons

    return (
        <div>
           <h1> This is main info </h1>
           <Button variant="outlined" color="primary"> <Link exact to="/bio">Bio</Link></Button>
           <Button variant="outlined" color="secondary"> <Link exact to="/works">Works</Link></Button>
        </div>
    )
}