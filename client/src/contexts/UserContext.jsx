import { createContext, useContext } from 'react'

import usePersistedState from '../hooks/usePersistedState';
import useRequest from '../hooks/useRequest';


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
    const [user, setUser] = usePersistedState(null, 'auth');
    const [cart, setCart] = usePersistedState([], 'cart');
    const { request } = useRequest();
  
    const registerHandler = async (email, password, username, tel) => {
    try {
        const newUser = { email, password, username, tel };
        const result = await request('/register', 'POST', newUser);
        if (!result || result.error) {
               

                throw new Error(result?.error);
            }
        setUser(result);
        return result;
    } catch (err) {
        console.error('Registration failed:', err.message);
        
        throw err;
    }
};

    const loginHandler = async (email, password) => {
        try {
            const result = await request('/login', 'POST', { email, password });

            if (!result || result.error) {
               

                throw new Error(result?.error);
            }

            setUser(result);
            return result;
        } catch (err) {
            console.error("Login error:", err);
            throw err;
        }
    };

    const logoutHandler = () => {
        return request('/logout', 'POST', null)
            .finally(() => {
                setUser(null);
                setCart([]);
            });
    };

    const userContextValues = {
        user,
        cart,
        setCart,
        isAuthenticated: !!user?._id,
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
