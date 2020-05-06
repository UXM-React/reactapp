import React, { Component } from "react";

class FileUpload extends Component {

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }
    onChangeHandler=event=>{
        console.log(event.target.files[0]);
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
    onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
}

	 render() {  	  
	  
    return (


  <div >
                <div className="col-lg-4">
                    <h4>File Upload</h4> 
                    <div className="form-group">
                    <input type="file" name="file" onChange={this.onChangeHandler}/>  
                    </div>
                    <div className="form-group">        
                   <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                  </div>
                   
                </div>
            </div>


     
    );
  }
}
 
export default FileUpload;