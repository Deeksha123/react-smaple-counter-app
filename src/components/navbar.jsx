import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-1">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

//stateless functional components

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Shopping counter
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
