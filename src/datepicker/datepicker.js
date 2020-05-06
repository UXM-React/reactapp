import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



class datepicker extends React.Component {
constructor(props){
    super(props)
    this.state = {date: new Date()};
    this.dateChanged = this.dateChanged.bind(this);
    this.clear = this.clear.bind(this);
  }
      
  dateChanged(d){
    this.setState({date: d});
  }

  clear(){
    this.setState({date: null});
  }

  render() {
    return ( 
      <div>
        <DatePicker selected={this.state.date}
                    onChange={this.dateChanged} />
        <div><input className="btn-primary mt-3" type="button" onClick={this.clear} value="Clear"/></div>
        
      </div>
    );
  }
}
export default datepicker;