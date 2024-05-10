// import React, { Fragment } from "react";
// import { IoHelpBuoy } from "react-icons/io5";
// import { IoIosPeople } from "react-icons/io";
// import { BsBoxes } from "react-icons/bs";
// import "./Icons.css";

// function Icons() {
//   return (
//     <Fragment>
//       <div className="container-fluid icons-container">
//         <div className="row">
//           <div className="col-md-4 icon-container">
//             <IoHelpBuoy className="icon1" />
//           </div>
//           <div className="col-md-4 icon-container">
//             <IoIosPeople className="icon2" />
//           </div>
//           <div className="col-md-4 icon-container">
//             <BsBoxes className="icon3" />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-4 icon1-text-container">
//             <strong>HELPING </strong>
//             YOU THRIVE
//           </div>
//           <div className="col-md-4 icon2-text-container">
//             <strong>BUILDING </strong>
//             OUR COMMUNITY
//           </div>
//           <div className="col-md-4 icon3-text-container">
//             <strong>TRANSFORMING </strong>
//             SOCIETY
//           </div>
//         </div>
//         <hr class="border-gray-200 mt-34px mb-0 d-none d-lg-block"></hr>
//       </div>
//     </Fragment>
//   );
// }

// export default Icons;

import React, { Fragment } from "react";
import { IoHelpBuoy } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BsBoxes } from "react-icons/bs";
import "./Icons.css";

function Icons() {
  return (
    <Fragment>
      <div className="container-fluid icons-container">
        <div className="row">
          <div className="col-md-4">
            <div className="icon-container">
              <IoHelpBuoy className="icon1" />
            </div>
            <div className="icon1-text-container">
              <strong>HELPING </strong>
              YOU THRIVE
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-container">
              <IoIosPeople className="icon2" />
            </div>
            <div className="icon2-text-container">
              <strong>BUILDING </strong>
              OUR COMMUNITY
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-container">
              <BsBoxes className="icon3" />
            </div>
            <div className="icon3-text-container">
              <strong>TRANSFORMING </strong>
              SOCIETY
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mt-34px mb-0 d-none d-lg-block"></hr>
      </div>
    </Fragment>
  );
}

export default Icons;
