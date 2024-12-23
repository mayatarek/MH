import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const apiUsers = await response.json();
  const signedUpUsers = JSON.parse(localStorage.getItem("users")) || [];
  return [...apiUsers, ...signedUpUsers];
};

const ProtectedRoutes = () => {
  const { userID } = useParams();
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const strippedUserID = userID.replace("user", "");

  useEffect(() => {
    const validateUser = async () => {
      const allUsers = await getUsers();
      for (let i = 0; i < allUsers.length; i++) {
        if (strippedUserID === allUsers[i].id.toString()) {
          setIsValid(true);
          break;
        }
      }
      setLoading(false);
    };

    validateUser();
  }, [strippedUserID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isValid ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;





