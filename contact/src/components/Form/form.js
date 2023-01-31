import React from "react";

const Nav = () => {
  return (
    <div>
      <h1>Contact Form</h1>

      <form>
        <label for="name">first name</label>
        <input type="text" placeholder="first name" name="first name" />
        <label for="last name">last name</label>
        <input type="text" placeholder="last name" name="last name" />
        <label for="email">email</label>
        <input type="text" placeholder="email address" name="email" />
        <label for="phone">phone</label>
        <input type="text" placeholder="phone" name="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Nav;
