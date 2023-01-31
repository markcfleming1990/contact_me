import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Search Contacts</h1>

      <form>
        <label for="name">first name</label>
        <input type="text" placeholder="first name" name="first name" />
        <label for="last name">last name</label>
        <input type="text" placeholder="last name" name="last name" />
        <label for="email">email</label>
        <input type="text" placeholder="email address" name="email" />
        <label for="phone">phone</label>
        <input type="text" placeholder="phone" name="phone" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
