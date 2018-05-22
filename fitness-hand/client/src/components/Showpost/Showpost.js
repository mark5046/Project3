import React from "react";
import "./Showpost.css";

const Showpost = props => (
  <div id="post" class="col-xs-6 col-md-6"> 
    <h3><p id="headerPost" > View all posts here</p></h3>

    <div  className="list-group">
      {props.posts.map(post => {
        return  <li id="allposts" className="list-group-item">
                  <li id="titleclass" className ="titleclass"> Title: {post.title}</li> 
                  <div id="descclass" className = "descclass" > {post.summary}</div>
                </li>
      })}
    </div>

</div>

);

export default Showpost;