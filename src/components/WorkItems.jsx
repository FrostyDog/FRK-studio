import React from "react";
import { Grid, Typography } from '@mui/material';
import Globe from "../assets/icons/Globe.svg";

export default function WorksItems(props) {
  return (
    <Grid container spacing={5} className="work-item-wrapper">
      <div className={`background ${props.orientation}`}></div>
      <Grid item xs={12} sm={8} md={9}>
        {props.itemImageLink ? (
          <a href={props.itemImageLink} target="_blank" rel="noopener noreferrer">
            <img src={props.itemImage} alt="" />
          </a>
        ) : (
          <img src={props.itemImage} alt="" />
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        container
        justify="flex-end"
        direction="column"
      >
        {props.realLink ? 
                    <a href={props.realLink}  target="_blank" rel="noopener noreferrer" >
                    <img style={{width:"32px"}} src={Globe} alt="Link" />
                  </a>
                  :
                  null}
        <Typography className="title" variant="h4">
          {props.title} <div className="background-color"></div>
        </Typography>

        <Typography>{props.text}</Typography>
      </Grid>
    </Grid>
  );
}
