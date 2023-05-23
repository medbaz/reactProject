import React from "react";
import "../index.css";
import PrimeImage  from "../assets/2landing.jpg";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import consta from "../constants/constants.jsx";
import { useReducer, useState } from "react";

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import imag from "./guide-image.png";

const FormReducer = (formstate, event) => {
  return { ...formstate, [event.name]: event.value };
};



function Profile( ) {
  const [state, setState] = useState("");
  const [isClicked, setClicked] = useState(true);
  const [isSubmit, setSubmit] = useState(false);

  const [formstate, dispatcher] = useReducer(FormReducer, {});
const { id, title } = Object.keys(consta)
  .filter((info) => info == "profile")
  .reduce((obj, key) => {
    obj = consta[key];
    return obj;
  }, {}); 
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);

    setTimeout((event) => {
      setSubmit(false);
    }, 10000);
  };

  return (
    <section className="users-profiles ">
      {isSubmit && (
        <div className="alert-success">
          <ul>
            {Object.entries(formstate).map(([name, value]) => (
              <li>{`${name} : ${value} `}</li>
            ))}
          </ul>
        </div>
      )}
      <article className="wrapper  flex flex-col justify-between  w-full   h-full">
        {/* consta.filter((info)=>{info[0]='profile'?info[0].title:}) */}
        <h1 className={"title  absolute bg-white "}> {title}</h1>
        <div className="flex flex-row w-full items-center mt-6 justify-between ">
        <form onSubmit={handleSubmit} className={"mt-24"} id="profiles-form">
          <div className="row-inputs">
            <label class="input">
              <input
                className={"input__field"}
                name={"First Name"}
                type={"text"}
                placeholder={" "}
                id={"inputs-style"}
                onChange={(event) => {
                  dispatcher({
                    name: event.target.name,
                    value: event.target.value,
                  });
                }}
              />
              <span className={"input__label"}>First Name</span>
            </label>
            <label class="input">
              <input
                className={"input__field"}
                name={"Last Name"}
                type={"text"}
                placeholder={" "}
                id={"inputs-style"}
                onChange={(event) => {
                  dispatcher({
                    name: event.target.name,
                    value: event.target.value,
                  });
                }}
              />
              <span className={"input__label"}>Last Name</span>
            </label>
          </div>

          <label class="input">
            <input
              className={"input__field"}
              type={"Email"}
              placeholder={" "}
              id={"inputs-style"}
              name={"Email"}
              onChange={(event) => {
                dispatcher({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
            />
            <span className={"input__label"}>Email</span>
          </label>
          <label class="input">
            <PhoneInput
              name={"phone "}
              country={"us"}
              value={state}
              onChange={(phone, name) => {
                setState(phone);
                console.log(JSON.stringify(name));
                dispatcher({
                  name: "phone",
                  value: phone,
                });
              }}
              containerClass={`${
                isClicked && state == "" ? "Phone-inputs-field" : "input__field"
              }`}
              onClick={() => {
                if (state.phone == undefined || state.phone == "") {
                  return setClicked(!isClicked);
                }
              }}
              containerStyle={{ width: "100%", padding: "3px" }}
              inputStyle={{ width: "100%", border: "none" }}
              buttonStyle={{
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
            />
            <span className={"input__label"}> Contact Number</span>
          </label>

          <label class="input">
            <input
              className={"input__field"}
              type={"text"}
              placeholder={" "}
              id={"inputs-style"}
              name={"Adress 1"}
              onChange={(event) => {
                dispatcher({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
            />
            <span className={"input__label"}>Adress 1</span>
          </label>

          <label class="input">
            <input
              className={"input__field"}
              type={"text"}
              placeholder={" "}
              id={"inputs-style"}
              name={"Adress 2"}
              onChange={(event) => {
                dispatcher({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
            />
            <span className={"input__label"}>Adress 2</span>
          </label>
          <input className={"form-Submit"} type={"submit"} />
        </form>

        <div className="guide-image ">
        <div className="imageWrapper"></div>
        <div className="textWrapper">
          <h1>Add more profiles. </h1>
          <h4>Create the team you trust.</h4>
          <p>
            Enjoy unlimted features with different accesse to each member feel
            free to contact us for more info .
          </p>
          {/* <img className="creat-team-image" src={imag} alt="" /> */}
        </div>
      </div>
      </div>
      </article>
      
    </section>
  );
}

export default Profile;
