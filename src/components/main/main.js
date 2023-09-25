import React from "react";
import Counter from "../counter/counter";
import Article from "../article/article";
import "./main.css";

function Header() {
    return (
        <>
            <div className="main">
                <div className="main--wrapp">
                    <Counter />
                    <Article />
                </div>
            </div>
        </>
    );
}

export default Header;
