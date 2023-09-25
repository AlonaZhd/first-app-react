import React from "react";
import "./footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer--wrapp">
                    <div className="footer__menu">
                        <div className="footerline">
                            <h2 className="footer__title">
                                Найрозумніші проєкти
                            </h2>
                            <h4 className="footer__subtitle">
                                реалізуємо найсміліші рішення
                            </h4>
                        </div>
                        <a href="#" className="button">
                            <span className="button__text">Ваш запит</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
