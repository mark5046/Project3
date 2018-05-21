import React from "react";

const Showpost = props => (
  <div id="post" class="col-xs-6 col-md-6"> 
    <p> show all the post here</p>  

    <ul className="list-group">
      {props.posts.map(post => {
        return <li className="list-group-item">{post.title}, {post.summary}</li>
      })}
    </ul>

</div>

);

export default Showpost;