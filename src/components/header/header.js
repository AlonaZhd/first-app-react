import React from "react";
import "./header.css";

function Header() {
    return (
        <>
            <div className="header">
                <div className="header--wrapp">
                    <div className="header__menu">
                        <span className="header__logo"></span>
                        <span className="header__burger"></span>
                    </div>

                    <div className="headline">
                        <h1 className="header__title">
                            Реалізуємо найбільші проекти в Україні
                        </h1>
                        <h5 className="header__subtitle">
                            стадіони, газопроводи, мости, дамби
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
