import React, { Component } from 'react'

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            postData : []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => Response.json())
        .then(data => this.setState({postData:data}))
    }
    render() {
        const postItems = this.state.postData.map((post)=>(
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

export default Post