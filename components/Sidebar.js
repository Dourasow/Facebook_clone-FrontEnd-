import React from 'react'
import Image from 'next/dist/client/image'
import SidebarItem from "./SidebarItem"
import {ImUsers} from 'react-icons/im'
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from 'react-icons/md'
import {AiOutlineShop} from 'react-icons/ai'
import {BsStopwatch} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            />
            <p className='hidden sm:inline-flex font-medium'>Abdul sow</p>
        </div>
        <SidebarItem  Icon={ImUsers} Value="Friends" />
        <SidebarItem  Icon={MdGroups} Value="Groups" />
        <SidebarItem  Icon={AiOutlineShop} Value="Marketplace" />
        <SidebarItem  Icon={MdOutlineOndemandVideo} Value="Watch" />
        <SidebarItem  Icon={BsStopwatch} Value="Memories" />
        <SidebarItem  Icon={MdOutlineExpandMore} Value="See More" />

    </div>
  )
}

export default Sidebar