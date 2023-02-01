import React from "react";
import { BrowswerRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav/nav.js";
import Form from "./components/Form/form.js";
import Search from "./components/Search/search.js";

const httpLink = createHttpLink({
  uri: "/graphql",
});

function App() {
  return (
    <div>
      <Nav />
      <Form />
      <Search />
    </div>
  );
}

export default App;
