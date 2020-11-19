// Import stylesheets
import "./style.css";
import matchRules from "match-rules";

// Write Javascript code!
const appDiv = document.getElementById("app");

window.validation = function() {
  let form = document.forms["myForm"];
  let fname = form["Fname"].value;
  let lname = form["Lname"].value;
  let address = form["Address"].value;
  let email = form["Email"].value;
  let dob = form["DOB"].value;
  let mobile = form["Mobile"].value;
  let city = form["city"].value;
  let pincode = form["pincode"].value;
  let linkedin = form["Linkedin"].value;
  let github = form["Twitter"].value;

  const FORM_RULES = {
    fname: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    lname: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    address: (exp, sourceObject) => /^[a-zA-Z0-9 ]+$/.test(exp),
    mobile: (exp, sourceObject) => exp.length == 10,
    city: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    pincode: (exp, sourceObject) => exp.length == 6
  };

  // source object
  const user = {
    fname,
    lname,
    address,
    email,
    dob,
    mobile,
    city,
    pincode,
    linkedin,
    github
  };
  console.log(user);

  console.log(matchRules(user, FORM_RULES));

  if (matchRules(user, FORM_RULES)) {
    return true;
  } else {
    alert("Inavlid Input");
    return false;
  }
};
