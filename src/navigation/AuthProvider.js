import React, {createContext, useState} from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: (email, password) => {
                    return axios.post(
                        "http://localhost:5000/login",
                        {
                            email: email,
                            password: password,
                        },
                        {
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                            }
                        }
                    ).then(res => res).catch(err => err)
                },
                register:  (email, password, password1) => {
                    return axios.post(
                        "http://localhost:5000/register",
                        {
                            email: email,
                            password: password,
                            password1: password1
                        },
                        {
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                            }
                        }
                    ).then(res => res).catch(err => err)
                },
                // TODO
                logout:  () => {
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};