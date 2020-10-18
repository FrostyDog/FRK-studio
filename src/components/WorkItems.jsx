import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function WorksItems(props) {
  return (
    <Grid container spacing={5} xs={12} className="work-item-wrapper">
      <div className={`background ${props.orientation}`}></div>
      <Grid item xs={12} sm={8} md={9}>
        <img src={props.itemImage} alt="" />
      </Grid>
      <Grid item xs={12} sm={4} md={3} container justify="flex-end" direction="column">
        <Typography className="title" variant="h4">
          {props.title} <div className="background-color"></div>
        </Typography>

        <Typography>{props.text}</Typography>
      </Grid>
    </Grid>
  );
}
