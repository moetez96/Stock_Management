import React, {useState} from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
    const[isAutheticated, setisAutheticated] = useState(localStorage.getItem('token') !== null);

  return (
    <Route
      {...rest}
      render={props => {
        if (isAutheticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
