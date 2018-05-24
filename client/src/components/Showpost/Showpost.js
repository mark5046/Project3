import React from "react";
import "./Showpost.css";

const Showpost = props => (
  <div id="post" class="col-xs-6 col-md-6"> 
    <h3><p id="headerPost" > View all posts here</p></h3>

    <div  className="list-group">
      {props.posts.map(post => {
        return  <div id="allposts" className="list-group-item">
                  <p id="titleclass" className="titleclass"><b>Title:</b> {post.title}</p> 
                  <p id="descclass" className="descclass" ><b>Description:</b> {post.summary}</p>
                  <p id="linkclass"><b>Link:</b><a href={post.link} id="linkclass" className="linkclass" target="_blank"> {post.link}</a></p>
                </div>
      })}
    </div>

</div>

);

export default Showpost;