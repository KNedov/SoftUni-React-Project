import { createContext, useContext, useState } from 'react'
import useRequest from '../hooks/userRequest'

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        _createdOn: 0,
        _id: '',
        accessToken: ''
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
});

export function UserProvider({
    children,

}) {
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async (email, password) => {
        const newUser = { email, password }

        const result = await request('/register', 'POST', newUser);

        setUser(result);

    }

    const loginHandler = async (email, password) => {
        const result = await request('/login', 'POST', { email, password });

        setUser(result)
    }

    const logoutHandler = () => {
        return request('/logout', 'GET', null, { accessToken: user.accessToken })
            .finally(() => setUser(null));
    };

    const userContextValues = {
        user, isAuthenticated: !!user?._id,
        registerHandler,
        loginHandler,
        logoutHandler,
    }

    return (
        <UserContext.Provider value={userContextValues}>
            {children}

        </UserContext.Provider>
    )
}

export function useUserContext() {
    const contextData = useContext(UserContext);

    return contextData;
}

export default UserContext;
