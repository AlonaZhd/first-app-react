import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";
import "./app.css";

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default App;
