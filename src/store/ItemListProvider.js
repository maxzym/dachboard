import React, { createContext, useReducer } from "react"

export const ItemListContext = createContext({})

const initialState = {
    itemList: []
}

const itemListReducer = (state, action) => {
    switch (action.type) {
        case "SET_ITEMLIST":
            return {
                ...state, // copy state 
                itemList: [...state.itemList, action.payload]  // set state counter
            }
    }
}

export const ItemListProvider = ({ children }) => {
    const [itemListState, itemListDispatch] = useReducer(
        itemListReducer,
        initialState
    )

    const { itemList } = itemListState

    const setItemList = payload =>
        itemListDispatch({ type: "SET_ITEMLIST", payload }) // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

    return (
        <ItemListContext.Provider value={{ itemList, setItemList }}>
            {children}
        </ItemListContext.Provider>
    )
}