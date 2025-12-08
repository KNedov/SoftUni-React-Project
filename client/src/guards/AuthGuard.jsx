
import { Navigate, Outlet } from "react-router-dom";

import { useUserContext } from "../contexts/UserContext";

export default function AuthGuard() {
    const { isAuthenticated } = useUserContext()
    if (!isAuthenticated) {

        return <Navigate to="/login" />;
    }

    return <Outlet />;
}