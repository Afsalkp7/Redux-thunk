import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postAction';
class Post extends Component {
    componentWillMount(){
        this.props.fetchPost();
    }
    render() {
        const postItems = this.props.posts.map((post)=>(
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))
      return (
        <>
        <div>Post</div>
        {postItems}
        </>

      )
    }
}
const mapStateToProps = state => ({
    posts : state.posts.items
})
export default connect(mapStateToProps,{fetchPost})(Post)