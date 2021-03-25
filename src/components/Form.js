import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class Form extends Component {

  render() {
    return (
      <div className="flex w-full justify-center">
        <div className="flex w-2/4 pb-5 justify-center bg-gray-100">
          <div className="w-full h-64 flex flex-wrap content-around px-5 justify-between ">
            <TextField
              required
              className="w-full bg-white"
              id="outlined-email-input-01"
              label="Title"
              type="text"
              variant="outlined"
              value={this.props.getState.title}
              onChange={this.props.changeState}
              onKeyUp={this.props.toggleBtn}
              size="small"
              name="title"
            />
            <select
              className="bg-white w-2/5 p-3 cursor-pointer"
              value={this.props.getState.currency}
              onChange={this.props.changeState}
              name="currency"
              onKeyUp={this.props.toggleBtn}
            >
              <option>Выберите Валюту:</option>
              <option className="border py-2 px-3" value={'$'}>
                $
              </option>
              <option className="border py-2 px-3" value={'E'}>
                E
              </option>
            </select>

            <select
              className="bg-white w-2/5 p-3"
              value={this.props.getState.price}
              onChange={this.props.changeState}
              name="price"
              onKeyUp={this.props.toggleBtn}
            >
              <option>Цена: </option>
              <option className="border py-2 px-3 cursor-pointer" value={100}>
                100
              </option>
              <option className="border py-2 px-3" value={200}>
                200
              </option>
            </select>

            <TextareaAutosize
              className="w-full h-24"
              rowsMax={8}
              aria-label="maximum height"
              rowsMin={4}
              name="about"
              value={this.props.getState.about}
              onChange={this.props.changeState}
              onKeyUp={this.props.toggleBtn}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
