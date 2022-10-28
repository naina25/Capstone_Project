import React from 'react'
import "./Trips.css";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
function Trips() {
  return (
    <div className='container2'>
        <div className='trips-h1'>
        <DirectionsBusIcon/>
         <h1> Recent Trips</h1>
         </div>
         <hr />
          {/* <hr /> */}
         <table width="100%">
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Trip</th>
            <th>Fare</th>
            <th>U-ID</th>
          </tr>
          <tr>
            <td>10-10-2022</td>
            <td>Devesh Pandey</td>
            <td>23</td>
            <td>M</td>
            <td>Ranchi- Raipur <br />(Chhattisgarh) <br /> Bus No - UP14AC2000</td>
            <td>- INR 76.19</td>
            <td>980978927</td>
          </tr>
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