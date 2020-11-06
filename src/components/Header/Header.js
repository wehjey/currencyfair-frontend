import React from "react";
import "./header.css"

class Header extends React.Component {
    render() {
        return (
            <div className="row bg-header">
                <div className="col-8 col-s-12">
                    <div className="header-container">
                        <header className="header">
                            <img
                                src={"./images/CF_logo_RGB_NEG.svg"}
                                className="brand-logo"
                                alt="CurrencyFair Logo"
                            />
                        </header>
                    </div>
                </div>
            </div>
        )
    };
}

export default Header;
