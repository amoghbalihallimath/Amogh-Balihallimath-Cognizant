import React, { Component } from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import { books, blogs, courses } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBooks: true,
      showBlogs: true,
      showCourses: true
    };
  }

  render() {
    const { showBooks, showBlogs, showCourses } = this.state;

    const bookdet = (
      <ul>
        {books.map((book) =>
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        )}
      </ul>
    );

    const content = blogs.map((blog) =>
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <h4>{blog.author}</h4>
        <p>{blog.content}</p>
      </div>
    );

    const coursedet = courses.map((course) =>
      <div key={course.id}>
        <h2>{course.cname}</h2>
        <p>{course.date}</p>
      </div>
    );

    return (
      <div>
        <div className="container">

          <div className="mystyle1">
            <h1>Course Details</h1>
            {showCourses && coursedet}
          </div>

          <div className="st2">
            <h1>Book Details</h1>
            {showBooks ? bookdet : <p>No books available.</p>}
          </div>

          <div className="v1">
            <h1>Blog Details</h1>
            {showBlogs && content}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
