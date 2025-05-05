import React from 'react'
import healthday from './healthDay.jpg'
import meditate from './meditate.jpg'
import food from './food.jpeg'
import calm from './calm.jpeg'
import { NavLink } from 'react-router-dom'
import blogPosts from './blogdata'

// Import icons from lucide-react
import { Facebook, Youtube, Linkedin } from 'lucide-react'

const Blog = () => {
  return (
    <div className=' my-5'>
      <div className=' container'>
        <div className=' row align-items-center'>
          {blogPosts.map((post) => {
            return (
              <div key={post.id} className='col-12 my-4 col-md-6 d-flex flex-column align-items-center '>
                <div className='child d-flex flex-column align-items-center '>
                  <img src={post.image} alt="" width={''} />
                  <h2 className='fs-2 my-3 mx-3 text-center'>{post.title}</h2>
                  <NavLink to={`/blog/${post.id}`} className='readMore'>Read More</NavLink>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Social Media Section */}
      <div className=' mt-5 text-center text-white py-5' style={{backgroundColor: '#40BACA'}}>
        <h3 >Visit our social media</h3>
        <div className='d-flex justify-content-center gap-4 mt-3'>
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/share/1EaGtVDHNG/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={32}  color={'#fff'}/>
          </a>

          {/* YouTube Link */}
          <a
            href="https://www.youtube.com/channel/UC2RQzGjBZBaH7l2PjlRENKQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={32} color={'#fff'} />
          </a>
          <a
            href="https://www.linkedin.com/company/carepointhealthcaresolutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} color={'#fff'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog
