import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import React from "react";


interface ProtectedRouteProps {
    element: React.ReactNode;
  }
  

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({element}) => {
    let isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    // isAuthenticated = false;
    return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
}
    
export default ProtectedRoute;