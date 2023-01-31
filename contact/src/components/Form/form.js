import React from "react";
import { validateEmail } from "../../utils/helpers";

function Form() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { firstName, lastName, email, phone } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("handle Form", formState);
    }
  };

  return (
    <div>
      <h1>Contacts</h1>

      <form onSubmit={handleSubmit}>
        <label for="firstName">first name</label>
        <input
          type="text"
          placeholder="first name"
          name="first name"
          defaultValue={firstName}
          onBlur={handleChange}
        />
        <label for="lastName">last name</label>
        <input
          type="text"
          placeholder="last name"
          name="last name"
          defaultValue={lastName}
          onBlur={handleChange}
        />
        <label for="email">email</label>
        <input
          type="text"
          placeholder="email address"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        />
        <label for="phone">phone</label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          defaultValue={phone}
          onBlur={handleChange}
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default Form;
