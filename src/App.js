import React, { Component } from 'react';
import './App.css';
import Steps from './components/Steps';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { actionsAPI } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      currency: '',
      about: '',
      name: '',
      email: '',
      age: '',
      hobby: ''
    };
  }

  handleChange = (event) => {
    let optionLabel = event.nativeEvent.target.selectedOptions;
    if (optionLabel !== undefined) {
      if (optionLabel[0].attributes[1] !== undefined) {
        this.setState({
          [event.target.name]: optionLabel[0].attributes[1].value,
        });
      } else {
        this.setState({
          [event.target.name]: '',
        });
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };
  setToStore = () => {
    this.props.setValues(this.state);
  };
  clearState = () => {
    this.setState({
      title: '',
      price: '',
      currency: '',
      about: '',
      name: '',
      email: '',
      age: '',
      hobby: '',
    });
    this.setToStore();
  }
  toggleBtn = () => {
    let a = this.state;
    let nextBtn = document.getElementById('nextBtn');
    if (
      a.title !== '' &&
      a.price !== '' &&
      a.currency !== '' &&
      a.about !== ''
    ) {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', '');
    }
  };
  render() {
    return (
      <div className="w-full bg-secondary">
        <Steps
          setToStore={this.setToStore}
          getState={this.state}
          changeState={this.handleChange}
          toggleBtn={this.toggleBtn}
          values={this.props.values}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  values: state.formWizardReducer.values,
});

const mapDispatchToProps = (dispatch) => ({
  setValues: (data) => dispatch(actionsAPI.setVals(data)),
});

const MainContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

const Main = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default Main;
