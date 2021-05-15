import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Style.css'
import { ItemListContext } from '../../store/ItemListProvider'
import ItemList from '../widget/ItemList'
export default function Home() {

    return (
        <div className="home">
            <ItemList />
        </div>

    )
}
