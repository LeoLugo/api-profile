import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import logo from '../../resources/images/ghlogo.png'
import {getInfo} from '../../actions/apiAction'
import {connect} from 'react-redux'


class App extends Component {

  componentDidMount() {
    getInfo()
  }


  render() {
    console.log(this.props)
    return (
      <Router>
        <div>
          <div className="header"><div><img alt="githublogo" src={logo}/></div><form><input placeholder="Search Users" type="text"/><button type="submit">Submit</button></form>
          </div>
          <div className="leftbar">
            <div><img src={this.props.repos.avatar_url} alt="my pic"/></div>
            <div>{this.props.repos.login}</div>
          </div>
          <div className="maintabs">
            <ul>
              <li>Overview</li>
              <li>Repositories</li>
              <li>Stars</li>
              <li>Followers</li>
              <li>Following</li>
              </ul>
            </div>
        </div>
      </Router>
    )
  }
}




function mapStateToProps(state) {
  return{
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App)
