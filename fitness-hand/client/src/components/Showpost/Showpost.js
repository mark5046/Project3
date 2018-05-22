import React from "react";
import "./Showpost.css";

const Showpost = props => (
  <div id="post" class="col-xs-6 col-md-6"> 
    <h3><p id="headerPost" > View all posts here</p></h3>

    <div  className="list-group">
      {props.posts.map(post => {
        return  <div id="allposts" className="list-group-item">
                  <p id="titleclass" className="titleclass"><b>Title:</b> {post.title}</p> 
                  <div id="descclass" className="descclass" ><b>Description:</b> {post.summary}</div>
                  <a href= {post.link} id="linkclass" className="linkclass" target="_blank"><b>Link:</b> {post.link}</a>
                </div>
      })}
    </div>

</div>

);

export default Showpost;