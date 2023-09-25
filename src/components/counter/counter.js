import React from "react";
import "./counter.css";

function Counter() {
    return (
        <>
            <div className="counter">
                <div className="counter__item">
                    <span className="counter__number">26</span>
                    <h3 className="counter__title">років</h3>
                    <span className="counter__text">на ринку</span>
                </div>

                <div className="counter__item">
                    <span className="counter__number">300+</span>
                    <h3 className="counter__title">проектів</h3>
                    <span className="counter__text">реалізовано</span>
                </div>

                <div className="counter__item">
                    <span className="counter__number">100%</span>
                    <h3 className="counter__title">задоволених</h3>
                    <span className="counter__text">клієнтів</span>
                </div>

                <div className="counter__item">
                    <span className="counter__number">20</span>
                    <h3 className="counter__title">міст</h3>
                    <span className="counter__text">України</span>
                </div>
            </div>
        </>
    );
}

export default Counter;
