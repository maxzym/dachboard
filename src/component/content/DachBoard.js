import React from 'react'
import ItemList from '../widget/ItemList'
import '../../css/Style.css'

export default function DachBoard() {
    return (
        <div className="home">
            <div>
                <form>
                <div class="Container">
		<div class="row">
			<div col-sm-5>
				<table  className="table-dachboard"  >
					<tr>
						<th  colspan="2" className="td-head">Invesment</th>
					</tr>
					<tr >
						<td colspan="2" className= "td-input"></td>
					</tr>
					<tr>
						<td colspan="2" className="td-invesment">Total Investment amount</td>
					</tr>
					<tr>
						<td className= "td-input"></td>
						<td className= "td-input"></td>
					</tr>
					<tr>
						<td className="td-invesment">1st H Plan</td>
						<td className="td-invesment">2st H Plan</td>
					</tr>
					<tr>
						<td className= "td-input"></td>
						<td className= "td-input"></td>
					</tr>
					<tr>
						<td className="td-invesment">Full Year Plan</td>
						<td className="td-invesment">Deferred to 2021</td>
                        
					</tr>
                    <tr>
						<td colSpan="2" className= "td-input"></td>
						
					</tr>

                    
				</table>
                {/*----------------- invesment---------------- */}
                <br></br>
				<table className="table-dachboard" >
                    <tr>
                        <th className="td-head">Overview</th>

                    </tr>
                    <tr>
                        <td className="td-Overview">{/*http://www.w3bai.com/th/w3css/tryit.php?filename=tryw3css_progressbar_js */}
                            <label>Approved</label>
                                <div class="progress">
                                    <div class="progress-bar" >
                                    </div>
                                </div>
                            <label>Reject</label>
                            <div class="progress">
                                    <div class="progress-bar" >
                                    </div>
                                </div>
                            <label>Rework</label>
                            <div class="progress">
                                    <div class="progress-bar" >
                                    </div>
                                </div>
                        </td>

                    </tr>
					
				</table>
                {/*---------------Overview------------- */}
                <br></br>
				
			</div>
            <div col-sm-1 ><table width="60"></table></div>
			<div col-sm-4>
				<table className="table">
					<tr>
						<th className="td-head">Item List</th>
						<td className="td-num"></td>
					</tr>
					<tr>
						<td colspan="2">
							<table>
								<tr>
									<td width="250">No.</td>
									<td width="250">Name</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
							</table>
						</td>
					</tr>

				</table>
				
			</div>
            {/*------------------ Item List---------------- */}

			
		</div>
	</div>
                </form>
                <br/>
            </div>

            
        </div>
    )
}
