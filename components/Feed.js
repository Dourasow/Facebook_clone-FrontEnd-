import React from 'react'
import CreatePost from "../components/CreatePost"
import Posts from "../components/Posts"

const Feed = () => {
  return (
    <div className='flex-grow h-screen pt-6 mr-6 overflow-y-auto'>
        <div className='mx-auto max-w-md md:max-w-xl lg:max-w-2xl'>
            {/* Create Post Box*/}
            {/* Post */}
            <CreatePost />
            <Posts />
        </div>
    </div>
  )
}

export default Feed