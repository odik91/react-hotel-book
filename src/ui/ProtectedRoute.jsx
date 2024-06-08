import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isAuthenticated, isLoading, status } = useUser();

  // 3. if there is no authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isAuthenticated && status !== "pending")
      navigate("/login");
  }, [isAuthenticated, isLoading, status, navigate]);

  // 2. whilde loading, show a spiner
  if (isLoading || status === "pending")
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. if there is a user, render the app
  if (isAuthenticated) return children;
};
export default ProtectedRoute;
