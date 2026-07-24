import React from 'react';

function BlogDetails(props) {
  const content = props.blogs.map((blog) =>
    <div key={blog.id}>
      <h2>{blog.title}</h2>
      <h4>{blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  );

  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {content}
    </div>
  );
}

export default BlogDetails;
