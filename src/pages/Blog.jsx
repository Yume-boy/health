import React from 'react'
import healthday from './healthDay.jpg'
import meditate from './meditate.jpg'
import food from './food.jpeg'
import calm from './calm.jpeg'
import { NavLink } from 'react-router-dom'
import blogPosts from './blogdata'

const Blog = () => {
  return (
    <div className='container my-5'>
      <div className='row  align-items-center'>
        {blogPosts.map((post) => {
          return (
            <div className='col-12 my-4 col-md-6 d-flex flex-column align-items-center '>
                <div className='child d-flex flex-column align-items-center '>
                    <img src={post.image} alt=""width={''} />
                    <h2 className='fs-2 my-3 mx-3 text-center'>{post.title}</h2>
                    <NavLink to={`/blog/${post.id}`} className={'readMore'}>Read More</NavLink>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
