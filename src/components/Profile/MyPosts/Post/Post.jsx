import React from 'react';
import s from './Post.module.css';

const Post = props => {

    return (
        <div className = {s.item}>
            <img src = "https://www.1zoom.ru/big2/946/289597-frederika.jpg"
            alt = "cartochka" />
            {props.message}
            <div>
                <span>{props.likesCount} Like</span>
            </div>
                
        </div>
    )
}

export default Post;