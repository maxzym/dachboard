import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Style.css'
import { ItemListContext } from '../../store/ItemListProvider'
export default function EditItem() {
    const { itemList, setItemList } = useContext(ItemListContext)
    return (
        <div className="home">
            <br />
            <form className="form-inline">
                <label>No.&nbsp;: &nbsp;<input type="text" className="form-control " id="No" name="No"></input></label>
            </form>
            <div className="container p-3 my-3 border">
                <form>
                    <div className="row">
                        <div className="col">
                            <label>Classifiacation</label>
                            <input type="text" className="form-control" id="Classifiacation" name="Classifiacation" />
                        </div>
                        <div className="col-1">
                            <label>Priority</label>
                            <input type="text" className="form-control" id="Priority" name="Priority" />
                        </div>
                        <div className="col">
                            <label>Capital Expenditure Item</label>
                            <input type="text" className="form-control" id="Capital" name="Capital" />
                        </div>
                        <div className="col">
                            <label>Division</label>
                            <input type="text" className="form-control" id="Division" name="Division" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <label>Total Investment amount</label>
                            <input type="number" className="form-control sm-2 mr-sm-2" id="Total" name="Total" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-2">
                            <label>1st H Plan</label>
                            <input type="number" className="form-control" id="1st" name="1st" />
                        </div>
                        <div className="col-2">
                            <label>2st H Plan</label>
                            <input type="number" className="form-control" id="2st" name="2st" />
                        </div>
                        <div className="col-2">
                            <label>Full Year Plan</label>
                            <input type="number" className="form-control" id="Full" name="Full" />
                        </div>
                        <div className="col-2">
                            <label>Deferred to 2021</label>
                            <input type="number" className="form-control" id="Deferred" name="Deferred" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <label>Goal</label>
                            <input type="text" className="form-control" id="Goal" name="Goal" />
                        </div>
                        <div className="col">
                            <label>Main Components</label>
                            <input type="text" className="form-control" id="Components" name="Components" />
                        </div>
                        <div className="col">
                            <label>Expectattion profit Gain</label>
                            <input type="text" className="form-control" id="Gain" name="Gain" />
                        </div>
                    </div>
                    <br />
                    <button type="button" class="btn btn-success">Edit</button>
                </form>
            </div>



        </div>
    )
}
