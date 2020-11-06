import React from "react";
import Main from "../Main"
import Sidebar from "../Sidebar";

class Body extends React.Component {
    
    // Main Body

    render() {
        return (
            <div className="row">
                <Main />
                <div className="col-4 col-s-6 sidebar">
                    {/* Main side bar. Not visible on mobile */}
                    <Sidebar displayClass=""/>
                </div>
            </div>
        )
    };
}

export default Body;