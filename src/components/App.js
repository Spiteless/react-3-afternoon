import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      api: "https://practiceapi.devmountain.com/api/",
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    let apiCall = this.state.api + "posts"
    axios.get(apiCall).then( res => {
        console.log('Successful pull from ' + apiCall)
        console.log(res)
        this.setState({
          posts: res.data
        })
      })
      .catch( err => { console.log(err)})
  }

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    let displayPosts = posts.map( p => {
      return ( 
        <Post key= { p.id }
              id= { p.id }
              text= { p.text }
              date = { p.date }
              updatePost = { this.updatePost }
              deletePost = { this.deletePost}
          />
        )
      })
      
    
    console.log("posts",posts)
    console.log(displayPosts)
    for (let p in posts) console.log(posts[p])

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {displayPosts}
        </section>
      </div>
    );
  }
}

export default App;
