import React from "react";

const List = ({title, description, handleInputChange, handleFormSubmit}) => (
    <div class="col-xs-6 col-md-6 ">
      
      {/* <form> */}
        <div class="form-group">
          <h4><label for="title">Title:</label></h4>
          <input name="title" value={title} onChange={handleInputChange} type="title" class="form-control" id="title" placeholder="enter title here"></input>
        </div>  
        <div class="form-group">
          <h4><label for="description">Description</label></h4>
          <textarea name="description" value={description} onChange={handleInputChange} class="form-control" id="description" rows="6"></textarea>
        </div>
        <button type="button" onClick={handleFormSubmit} class="btn btn-success">Submit</button>
      {/* </form>   */}
      
    </div>  
);

export default List;