import React from "react";
import "./post.css";

function Post() {
    return (
        <>
            <div className="post__wrapp">
                <div className="post__item">
                    <img src="./img/photo.jpg" alt="" class="post__image"></img>
                    <span className="post__line"></span>
                    <h4 className="post__title">Арена</h4>
                    <p className="post__text">
                        Ми зробили найкрасивішу арену в Європі. Це відкриття
                        стало для нас проривною точкою для розвитку на наступні
                        десятиліття. Ми дуже раді цій події.
                    </p>
                </div>

                <div className="post__item">
                    <img src="./img/photo.jpg" alt="" class="post__image"></img>
                    <span className="post__line"></span>
                    <h4 className="post__title">Арена</h4>
                    <p className="post__text">
                        Ми зробили найкрасивішу арену в Європі. Це відкриття
                        стало для нас проривною точкою для розвитку на наступні
                        десятиліття. Ми дуже раді цій події.
                    </p>
                </div>

                <div className="post__item">
                    <img src="./img/photo.jpg" alt="" class="post__image"></img>
                    <span className="post__line"></span>
                    <h4 className="post__title">Арена</h4>
                    <p className="post__text">
                        Ми зробили найкрасивішу арену в Європі. Це відкриття
                        стало для нас проривною точкою для розвитку на наступні
                        десятиліття. Ми дуже раді цій події.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Post;
