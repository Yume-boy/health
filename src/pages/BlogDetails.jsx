import { useParams, } from 'react-router-dom';
import blogPosts from './blogdata';
import React from 'react';

const BlogDetails =() => {
  const { id } = useParams();

  // Find the post with matching ID
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <p>Blog post not found.</p>;

  return (
    <div className='container my-5'>
      <div className='d-flex flex-column align-items-center '>
        <h2 className='fw-semibold display-5  col-12 col-md-6'>{post.title}</h2>
        <img src={post.image} className='my-3' alt={post.title} width="400" />
        <h4 className='fw-semibold'>{post.preview}</h4>
        <p style={{ whiteSpace: 'pre-wrap' }} className="col-12 col-md-6">
          {post.content}
        </p>

      </div>
    </div>
  );
}

export default BlogDetails;
