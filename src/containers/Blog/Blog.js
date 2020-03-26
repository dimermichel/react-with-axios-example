import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0,6)
                const updatedPosts = posts.map(post => {
                    //console.log(post)
                    post.title = post.title.toUpperCase()
                     return {
                        ...post,
                        author: 'Michel'
                    }
                })
                this.setState({posts: updatedPosts})
                //console.log(res)
            }).catch(err => console.log(err))
    }

    postSelectedHandler = (id) => {
        console.log('This is the Post ID:', id)
        this.setState({selectedPostId: id})
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;