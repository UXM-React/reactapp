import React, { Component } from "react";

 
class MultiUpload extends Component {
	constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            imgCollection: ''
        }
    }

    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.imgCollection);
        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
            
        }
            
       
    }

    render() {
        return (
            <div >
                <div className="col-lg-4">
                    <h4>Multiple Upload</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default MultiUpload;