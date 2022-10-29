import React,{useEffect, useState} from 'react'
import "./Trips.css";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import axios from 'axios';

function Trips() {
  const [trips, setTrips] = useState([])
  const getTrips = async () => {
		await axios.get("https://localhost:44387/api/trip").then((res) => {
			console.log(res.data);
			setTrips(res.data);
		});
	};

  useEffect(() => {
    getTrips();
  }, [])
  
  return (
    <div className='container2'>
        <div className='trips-h1'>
        <DirectionsBusIcon/>
         <h1> Recent Trips</h1>
         </div>
         <hr />
          {/* <hr /> */}
         <table width="100%">
          <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Departure City</th>
            <th>Destination City</th>
            <th>Fare</th>
            <th>U-ID</th>
          </tr>
          </thead>
          <tbody>
          {trips.map((trip, index) => {
            return (
            <tr>
              <td>{trip.Departure_Time_Date.slice(0,10)}</td>
              <td>{trip.passenger_name}</td>
              <td>{trip.passenger_age}</td>
              <td>{trip.passenger_gender}</td>
              <td>{trip.Departure_City}</td>
              <td>{trip.Destination_City}</td>
              <td>{trip.cost}</td>
              <td>{trip.passenger_uid}</td>
           </tr>
           ) 
             
          })} 
        
          </tbody>
         </table>
    </div>
  )
}
export default Trips




// <div className='col-div'>
// <div className='col1'>
//   <h2>Date</h2>
//   <p>10-10-2022</p>
// </div>
// <div className='col2'>
//   <h2>Name</h2>
//   <p>Sarthak Bahuguna</p>
// </div>
// <div className='col3'>
//   <h2>Age</h2>
//   <p>22</p>
// </div>
// <div className='col4'>
//   <h2>Gender</h2>
//   <p>M</p>
// </div>
// <div className='col5'>
//   <h2>Trip</h2>
//   <p>Ranchi- Raipur <br />(Chhattisgarh) <br /> Bus No - UP14AC2000</p>
// </div>
// <div className='col6'>
//   <h2>Fare</h2>
//   <p>- INR 76.19</p>
// </div>
// <div className='col7'>
//   <h2>UID</h2>
//   <p>980978927</p>
// </div></div>