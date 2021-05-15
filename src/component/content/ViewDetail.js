import React from 'react'
import '../../css/Style.css'
export default function ViewDetail() {
    return (
        <div className="home">
            <form>
                <table className="table-view" >
                    <tr bgcolor="#C4C4C4" height="50">
                        <th width="5%" className="td-head"><div align="Start">No.</div></th>
                        <th width="15%">011</th>
                        <th width="50%"></th>
                        <th width="6%">Status :</th>
                        <th width="15%"></th >
                        
                    </tr>
                    
                        <tr>
                            <td colSpan="2" className="td-view">Classifiacation</td>
                            <td colSpan="3"className="td-view">11111111</td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Priority</td>
                            <td colSpan="3"className="td-view">55555555555555555555555</td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Capital Expenditure Item</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Division</td>
                            <td colSpan="3"className="td-view"> </td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Total Investment amount</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">1st H Plan</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">2st H Plan</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Full Year Plan</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Deferred to 2021</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Goal</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="td-view">Main Components</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Expectattion profit Gain</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"className="td-view">Start Date</td>
                            <td colSpan="3"className="td-view"></td>
                            
                        </tr> 
                        <tr>
                            <td colSpan="2"className="td-view">End Date</td>
                            <td colSpan="3"className="td-view"></td>
                        </tr>                      
                    
                </table>
            </form>
            <br></br>
            <form>
                <table  className="table-view">
                    <tr bgcolor="#C4C4C4">
                        <th className="td-head">
                            Comment
                        </th>
                    </tr>
                   
                        
                        <tr>
                            <td align="center"><textarea className="textarea" cols="80" rows="5" 
                                ></textarea></td>
                        </tr>
                        <tr>
                            <td align="End"><button type="button" class="Submit-view">Submit</button></td>
                        </tr>
                        
                  
                </table>
                <br></br>
        
            </form>
            
        </div>
    )
}
