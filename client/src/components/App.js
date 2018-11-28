import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const NewPost = () => <h2>New Post</h2>;

class App extends Component {
  componentDidMount(){  //render되고 난 후 실행되는 함수
    this.props.fetchUser();
  }
  render() {
    console.log(actions);
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div>
              <Header />
            </div>
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/posts/new" component={NewPost} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null,actions)(App);
