import React from "react";
import "./Policies.css";
import CloseIcon from "@mui/icons-material/Close";

const Policies = ({ showPolicies, setShowPolicies }) => {
	return (
		<section className="policies-section">
			<div className="pol-headings">
				<div className="pol-txt">
					Cancellation policy
					<hr />
				</div>
				<button
					type={"button"}
					onClick={() => {
						setShowPolicies(!showPolicies);
					}}
				>
					<CloseIcon />
				</button>
			</div>
			<div className="cancel-table">
				<table>
					<tr>
						<th>Cancellation Time</th>
						<th>Refund Amount</th>
					</tr>
					<tr>
						<td>
							Anytime Before the journey start time (Valid only
							for upto 3 cancellations in last 30 days)
						</td>
						<td>100%</td>
					</tr>
					<tr>
						<td colSpan="2">
							After 3 cancellations the following policy will be
							applicable:-
						</td>
					</tr>
					<tr>
						<td>Anytime before trip starts to 24 hours</td>
						<td>50%</td>
					</tr>
					<tr>
						<td>
							Anytime before trip starts from 24 hours to 0 hours
						</td>
						<td>0%</td>
					</tr>
				</table>
				<ul className="list-item">
					<li>
						If the cancellation is done after the journey time then
						no refund will be processed.
					</li>
					<li>
						The said policy is applicable on tickets booked by
						zingbus.com (web or mobile) and the zingbus app only.
					</li>
					<li>
						For tickets booked from any other channel or OTA
						partner, the cancellation policy as mentioned by the
						channel/OTA partner will be applicable.
					</li>
				</ul>
			</div>
		</section>
	);
};
export default Policies;
