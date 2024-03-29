import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "",
            body : ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const post = {
            title : this.state.title,
            body : this.state.body
        }
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers : {
                "content-type":"application/json"
            },
            body : JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data =>console.log(data))
    }
  render() {
    return (
    <>
      <div>PostForm</div>
      <form onSubmit={this.onSubmit}>
        <label>Title : </label><br />
        <input type="text" name='title' onChange={this.onChange} value={this.state.title}/><br />
        <label>Body : </label><br />
        <textarea name='body' onChange={this.onChange} value={this.state.body}/>
        <br />
        <button type='submit'>submit</button>
        
      </form>
    </>
    )
  }
}
export default PostForm