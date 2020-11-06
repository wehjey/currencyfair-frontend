import React from "react";
import "./sidebar.css"

class Sidebar extends React.Component {
    render() {
      return (
          <div className={this.props.displayClass === "" ? "sidebar-outer" : "sidebar-outer sb-hidden"}>
            <div className="sidebar-box">

            </div>
          </div>
      )
    };
}

export default Sidebar;