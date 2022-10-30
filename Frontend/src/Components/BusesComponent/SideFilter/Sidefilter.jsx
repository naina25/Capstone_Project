import axios from "axios";
import React,{usestate} from "react";
import "./SideFilter.css";
const Sidefilter = () => {

	return (
		<>
			<div id="sidebar">
				<div className="filter-div">
					<h6>Sort</h6>
					<h6 className="p-1 border-bottom">DEPARTURE TIME</h6>
					<ul>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 6 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 7 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 8 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 9 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 10 am(0)
						</li>
					</ul>
				</div>
				<div className="filter-div">
					<h6 class="p-1 border-bottom">Arrival Time</h6>
					<ul class="list-group">
						<li>
							<input type="checkbox" className="ut_list" />
							Before 6 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 7 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 8 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 9 am(0)
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Before 10 am(0)
						</li>
					</ul>
				</div>
				<div className="filter-div">
					<h6 className="p-1 border-bottom">Bus Type</h6>
					<ul class="list-group">
						<li>
							<input type="checkbox" className="ut_list" />
							Volvo
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Volvo 1
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Volvo 2
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Volvo 3
						</li>
						<li>
							<input type="checkbox" className="ut_list" />
							Volvo 4
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Sidefilter;
