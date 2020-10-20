import React from "react";
import emailjs from "emailjs-com";
import { Button, TextField } from "@material-ui/core";
import "../theme/form.scss";

emailjs.init("user_pvw2UgxzHtwfYODiHHnep");

export default function ContactMe() {
  function initMail() {
    emailjs.init("user_pvw2UgxzHtwfYODiHHnep");
    console.log("init");
  }

  initMail();

  function sendEmail(e) {
    console.log("submit");
    e.preventDefault();

    emailjs.sendForm("service_frkfrkfrk", "template_nff9fet", e.target, "user_pvw2UgxzHtwfYODiHHnep").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <form className="contact-form" onSubmit={(e) => sendEmail(e)}>
      <input type="hidden" name="contact_number" />
      <TextField id="outlined-basic" name="name" fullWidth label="name" variant="outlined" />
      <TextField id="outlined-basic" name="email" fullWidth label="e-mail" variant="outlined" />
      <TextField
        id="outlined-multiline-static"
        label="message"
        name="message"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
      />
      <Button type="sumbit" className="button" value="Send" variant="contained" color="secondary">
        submit
      </Button>
    </form>
  );
}
