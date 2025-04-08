import React from "react";
import Article from "./Article";
import blogData from "../data/blog";


function GetArticles(){
    return( blogData.posts.map(post=>{
        return (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
        )
    })
    )
};


function ArticleList(){
return(
<main>
<GetArticles />
</main>
)
}

export default ArticleList;