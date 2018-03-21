import React, { Component } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class Date extends Component {

  constructor() {
    super();
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  state = {
    date: null,
    focused: false
  }

  onDateChange = () => {
    console.log("Date changed");
  }

  onFocusChange = () => {
    console.log("focused: ", focused, date);
  }

  render() {
    return (
      <div>
        <SingleDatePicker
            date={this.state.date}
            focused={this.state.focused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
        />
      </div>
    );
  }

}

export default Date;
