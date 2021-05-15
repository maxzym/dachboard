import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Style.css'
import { ItemListContext } from '../../store/ItemListProvider'
import ItemList from '../widget/ItemList'

export default function Order() {
    const [no, setNo] = useState("")
    const [classification, setClassification] = useState("")
    const [priority, setPriority] = useState("")
    const [cap, setCap] = useState("")
    const [division, setDivision] = useState("")
    const [totalAmouse, setTotalAmouse] = useState(0)
    const [h1, setH1] = useState(0)
    const [h2, setH2] = useState(0)
    const [fullYear, setFullYear] = useState(0)
    const [defer, setDefer] = useState("")
    const [goal, setGoal] = useState("")
    const [main, setMain] = useState("")
    const [expec, setExpec] = useState("")
    const [sdate, setSdate] = useState("")
    const [edate, setEdate] = useState("")

    const { itemList, setItemList } = useContext(ItemListContext)

    const setData = (e) => {
        e.preventDefault()
        let data = {
            no: no,
            classification: classification,
            priority: priority,
            cap: cap,
            division: division,
            totalAmouse: totalAmouse,
            h1: h1,
            h2: h2,
            fullYear: fullYear,
            defer: defer,
            goal: goal,
            main: main,
            expec: expec,
            sdate: sdate,
            edate: edate
        }
        setItemList(data)
    }
    return (
        <div className="home">

            <h1>New Brand</h1>

            <div >
                <form onSubmit={(e) => setData(e)}>
                    <div className="row">
                        <div className="form-group">
                            <label>No.</label>
                            <input type="text" className="form-control" id="No" name="No" onChange={(e) => setNo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Classifiacation</label>
                            <input type="text" className="form-control" id="Classifiacation" name="Classifiacation" onChange={(e) => setClassification(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Priority</label>
                            <input type="text" className="form-control" id="Priority" name="Priority" onChange={(e) => setPriority(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Capital Expenditure Item</label>
                            <input type="text" className="form-control" id="Capital" name="Capital" onChange={(e) => setCap(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Division</label>
                            <input type="text" className="form-control" id="Division" name="Division" onChange={(e) => setDivision(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label>Total Investment amount</label>
                            <input type="number" className="form-control" id="Total" name="Total" onChange={(e) => setTotalAmouse(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>1st H Plan</label>
                            <input type="number" className="form-control" id="1st" name="1st" onChange={(e) => setH1(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>2st H Plan</label>
                            <input type="number" className="form-control" id="2st" name="2st" onChange={(e) => setH2(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Full Year Plan</label>
                            <input type="number" className="form-control" id="Full" name="Full" onChange={(e) => setFullYear(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Deferred to 2021</label>
                            <input type="number" className="form-control" id="Deferred" name="Deferred" onChange={(e) => setDefer(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label>Goal</label>
                            <input type="text" className="form-control" id="Goal" name="Goal" onChange={(e) => setGoal(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Main Components</label>
                            <input type="text" className="form-control" id="Components" name="Components" onChange={(e) => setMain(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expectattion profit Gain</label>
                            <input type="text" className="form-control" id="Gain" name="Gain" onChange={(e) => setExpec(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Start Date</label>
                            <input type="date" className="form-control" id="Gain" name="Gain" onChange={(e) => setSdate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>End Date</label>
                            <input type="date" className="form-control" id="Gain" name="Gain" onChange={(e) => setEdate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-success">Save</button>
                    </div>

                </form>
            </div>
            <div>
                <ItemList />
            </div>
        </div>
    )
}
