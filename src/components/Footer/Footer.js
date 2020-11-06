import React from "react";
import "./footer.css"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="float-left">&copy; 2016 CurrencyFair</div>
                <div className="float-right">
                    <nav className="footer-nav">
                        <a href="/">Help & Support</a>
                        <a href="/">Legal Stuff</a>
                    </nav>
                </div>
            </div>
        )
    };
}

export default Footer;