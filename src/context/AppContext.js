import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null)

  return <Provider value={{ token, setToken, currentUser, setCurrentUser }}>{children}</Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
