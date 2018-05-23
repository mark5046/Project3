import React from "react";
import "./Form.css";

const Form = ({title, description, link, handleInputChange, handleFormSubmit}) => (         
    <div id="form" class="col-xs-6 col-md-6 ">
        
      <h3><p id="headerForm"> Enter your post here</p></h3>
      
      {/* <div className="container"> */}
      <div id="titleTable" class="form-group">
          <h4><label for="title">Title: </label></h4>
          <input name="title" value={title} onChange={handleInputChange} type="title" class="form-control" id="title" placeholder="Required"></input>
      </div>  
      <div id="descTable" class="form-group">
          <h4><label for="description">Description: </label></h4>
          <textarea name="description" value={description} onChange={handleInputChange} class="form-control" id="description" rows="4"placeholder="Required"></textarea>          
      </div>
      <div id="linkTable" class="form-group">
          <h4><label for="link">Link: </label></h4>
          <input name="link" value={link} onChange={handleInputChange} type="link" class="form-control" id="link"placeholder="Optional (www.yoursite.com)"></input>
      </div>
      <button id="submit" type="button" onClick={handleFormSubmit} class="btn btn-success">Submit</button>

        {/* </div> */}
    </div>  
  );
  
  export default Form;