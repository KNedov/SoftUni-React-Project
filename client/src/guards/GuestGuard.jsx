
import { Navigate, Outlet } from "react-router-dom";

import { useUserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    const { isAuthenticated } = useUserContext()
    if (isAuthenticated) {

        return <Navigate to="/" />;
    }

    return <Outlet />;
}