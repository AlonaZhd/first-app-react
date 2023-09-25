import React from "react";
import Post from "../post/post";
import "./article.css";

function Article() {
    return (
        <>
            <div className="article">
                <h3 className="article__title">Наші найбільші проекти</h3>

                <Post />
            </div>
        </>
    );
}

export default Article;
