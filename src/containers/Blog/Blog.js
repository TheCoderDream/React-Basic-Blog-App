import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null,
        error: false
    };

    postSelectedHandler = (id) => {
        this.setState({selectedPost: id});
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                this.setState({post: response.data})
            })
            .catch(err => {
                this.setState({error: true});
            })
    }

    render() {
        let posts;
        if(this.state.error) {
            posts = <p className={'text-center text-danger'}>Something went wrong while fetching posts!</p>
        } else {
            posts = this.state.map(post => {
                return <div className={'col-6'}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={this.postSelectedHandler.bind(this, post.id) }
                    />
                </div>
            })
        }


        return (
            <div className={'container'}>
                <div className={'row'}>
                    {posts}
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Blog;