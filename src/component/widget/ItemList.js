import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Style.css'
import { ItemListContext } from '../../store/ItemListProvider'
export default function ItemList() {
    const { itemList, setItemList } = useContext(ItemListContext)
    const [total, setTotal] = useState(0)
    const [h1, setH1] = useState(0)
    const [h2, setH2] = useState(0)
    const [fullYear, setFullYear] = useState(0)


    const setData = () => {
        itemList.forEach(item => {
            setTotal(Number(total) + Number(item.totalAmouse))
            setH1(Number(h1) + Number(item.h1))
            setH2(Number(h2) + Number(item.h2))
            setFullYear(Number(fullYear) + Number(item.fullYear))
        });
    }

    useEffect(() => {
        setData()

    }, [itemList])
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            No.
                            </th>
                        <th>
                            Classifiacation
                            </th>
                        <th>
                            Priority
                            </th>
                        <th>
                            Capital Expenditure Item
                            </th>
                        <th>
                            Division
                            </th>
                        <th>
                            Total Investment amount
                            </th>
                        <th>
                            1st H Plan
                            </th>
                        <th>
                            2st H Plan
                            </th>
                        <th>
                            Full Year Plan
                            </th>
                        <th>
                            Deferred to 2021
                            </th>
                        <th>
                            Goal
                            </th>
                        <th>

                            Main Components
                            </th>
                        <th>
                            Expectattion profit Gain
                            </th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {item.no}
                            </td>
                            <td>
                                {item.classification}
                            </td>
                            <td>
                                {item.priority}
                            </td>
                            <td>
                                {item.cap}
                            </td>
                            <td>
                                {item.division}
                            </td>
                            <td>
                                {item.totalAmouse}
                            </td>
                            <td>
                                {item.h1}
                            </td>
                            <td>
                                {item.h2}
                            </td>
                            <td>
                                {item.fullYear}
                            </td>
                            <td>
                                {item.defer}
                            </td>
                            <td>
                                {item.goal}
                            </td>
                            <td>
                                {item.main}
                            </td>
                            <td>
                                {item.expec}
                            </td>
                            <td>
                                <Link to={"/edit/" + item.no}>
                                    <button className="btn btn-warning">Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th colSpan="5" className="text-center">
                            Total
                        </th>
                        <th>
                            {total}
                        </th>
                        <th>
                            {h1}
                        </th>
                        <th>
                            {h2}
                        </th>
                        <th>
                            {fullYear}
                        </th>
                        <th colSpan="4"></th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}
