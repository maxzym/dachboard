import React, { createContext, useReducer } from "react"

export const ProfileContext = createContext({})

const initialState = {
    profile: {
        username: "",
        fname: "",
        lname: ""
    }
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...state, // copy state 
                profile: action.payload // set state counter
            }
    }
}

export const ProfileProvider = ({ children }) => {
    const [profileState, profileDispatch] = useReducer(
        profileReducer,
        initialState
    )

    const { profile } = profileState

    const setProfile = payload =>
        profileDispatch({ type: "SET_PROFILE", payload }) // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}