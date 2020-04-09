import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration:'underline'
                                    }}
                                     >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
             {/*  <Posts />  */} 
             {/*  <Route path="/" exact render={() => <h1>Home</h1>} />
              <Route path="/" render={() => <h1>Home 2</h1>} /> */}
              <Route path="/" exact component={Posts} />
              <Route path="/new-post" component={NewPost} />

            </div>
        );
    }
}

export default Blog;