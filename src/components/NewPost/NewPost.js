import React, {Component} from 'react';

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: ''
    };

    render() {
        return (
            <div className={'card'}>
                <div className={'card-header'}>
                    Add a post
                </div>
                <div className={'card-body'}>
                    <div className={'form-group'}>
                        <label htmlFor="title">Title</label>
                        <input
                            value={this.state.title}
                            onChange={(event) => this.setState({title: event.target.value})}
                            type="text"
                            id={'title'}
                            className={'form-control'}/>
                    </div>
                    <div className={'form-group'}>
                        <textarea
                            value={this.state.content}
                            onChange={(event) => this.setState({content: event.target.value})}
                            rows={'4'} >

                        </textarea>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewPost;