import React from "react";
import LogoutPage from "../Authentication/LogoutPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header : React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
debugger;
    return(
        <header className="header">
            <h1>Book Application</h1>
            {isAuthenticated &&  <LogoutPage />}
        </header>
    )
}

export default Header;