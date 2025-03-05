import React from "react";
import { useDispatch  , useSelector} from "react-redux";
import { logout } from "../../store/authSlice";
import { RootState } from "../../store/store";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (
        <div>
            <h1>Book Store</h1>
            {isAuthenticated && <button onClick={() => dispatch(logout())}>Logout</button>}
        </div>
    )
}

export default LogoutPage;