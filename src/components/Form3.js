import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Form3 extends Component {

  toggleBtn = () => {
    let a = this.props.getState;
    let nextBtn = document.getElementById('nextBtn');
    if (a.age !== '' && a.hobby !== '') {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', '');
    }
  };

  render() {
    return (
      <div className="flex w-full justify-center">
        <div className="flex w-2/4 pb-5 justify-center bg-gray-100">
          <div className="w-full h-64 flex flex-wrap content-around px-5 justify-between">
            <TextField
              required
              className="w-full bg-white"
              id="outlined-email-input-01"
              label="Age"
              type="text"
              variant="outlined"
              value={this.props.getState.age}
              onChange={this.props.changeState}
              onKeyUp={this.toggleBtn}
              size="small"
              name="age"
            />
            <TextField
              required
              className="w-full bg-white"
              id="outlined-email-input-01"
              label="Hobby"
              type="email"
              variant="outlined"
              value={this.props.getState.hobby}
              onChange={this.props.changeState}
              onKeyUp={this.toggleBtn}
              size="small"
              name="hobby"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form3;
