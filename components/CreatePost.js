import React from 'react'
import Image from 'next/dist/client/image'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import {IoMdPhotos} from 'react-icons/io'
import { BsEmojiSmile } from 'react-icons/bs'
import { useRef } from 'react'
import { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
// import { session } from 'inspector'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {addPost} from '../public/src/features/PostSlice'

const CreatePost = () => {
    const FACEBOOK_CLONE = ""
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null)
    const dispatch = useDispatch;
    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (e) => {
                setImageToPost(e.target.result)
            }
        }
    }

    const removeImage = () => {
            setImageToPost(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;
        const FormData = new FormData();

        FormData.append('file', imageToPost);
        FormData.append('post', inputRef.current.value);
        FormData.append('name', session?.user.name);
        FormData.append('email', session?.user.email);
        FormData.append('profilepic', session?.user.profilepic);

        axios
        .post(FACEBOOK_CLONE, FormData, {
            headers: {Accept: 'application/json'},
        })
        .then((response) => {
            inputRef.current.value ="";
            dispatch(addPost(response.data))
            removeImage();
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
        <div className='flex p-4 space-x-2 items-center'>
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            />
            <form className='flex flex-1'>
                <input className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4'
                 type="text" ref={inputRef} placeholder='What is on your mind'></input>
                 <button onClick={handleSubmit} hidden></button>
            </form>
        </div>

        {imageToPost && ( 
            <div 
            onClick={removeImage}
            className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150
                 cursor pointer'>
                    <img src={imageToPost} className="h-10 object-contain"/>
                        <RiDeleteBin6Line className='h-8 hover:text-red-500'/>
            </div>
        )}
        <div className='flex justify-evenly py-2'>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md 
                        hover:cursor-pointer'>
                <HiOutlineVideoCamera size={20} className='text-red-500'/>
                <p className='font-semibold text-gray-500'>Live Video</p>
            </div>

            <div onClick={handleClick}  className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md 
                        hover:cursor-pointer'>
                <IoMdPhotos size={20} className='text-green-500'/>
                <p className='font-semibold text-gray-500'>Photo/Video</p>
                <input onChange={addImageToPost} type="file" ref={hiddenFileInput} hidden accept='image/*' />
            </div>

            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md 
                        hover:cursor-pointer'>
                <BsEmojiSmile size={20} className='text-yellow-500'/>
                <p className='font-semibold text-gray-500'>feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost