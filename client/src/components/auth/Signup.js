import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";

const URL_SIGNUP = "http://localhost:4000/signup";

class Signup extends React.Component {
  onFormSubmit = (formProps) => {
    console.log(formProps);
    axios
      .post(URL_SIGNUP, formProps)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>Signup</div>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <fieldset>
            <label>Email:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password: </label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup = reduxForm({ form: "signup" })(Signup);