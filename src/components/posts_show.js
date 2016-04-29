import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {fetchPost} from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }


  render(){
    return (
      <div>
      Show Post {this.props.params.id}
      </div>
    );
  }
}

export default connect(null, {fetchPost})(PostsShow);
