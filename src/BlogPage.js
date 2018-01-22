import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogPosts from './Content/BlogPosts';
import './css/BlogPage.css';

export default class BlogPage extends Component {
  render() {
    return (
      <main className="blog-posts">
        {BlogPosts.length === 0 &&
          <section className="blog-under-construction">
            <h1>No Posts Yet :)</h1>
            <h3>I promise I'll get round to this one day!</h3>
          </section>
        }
        {BlogPosts.map(post => <ReactMarkdown source={post} />)}
      </main>
    );
  }
}