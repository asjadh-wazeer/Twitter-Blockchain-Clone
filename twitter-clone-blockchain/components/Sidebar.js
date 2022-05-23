import Link from "next/link"

import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { VscTwitter } from 'react-icons/vsc'
import SidebarOption from './SidebarOption'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import {BsBookmark,BsBookmarkFill,BsPerson,BsPersonFill} from 'react-icons/bs'


import { useState } from 'react'


const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
  }

function Sidebar(initialSelectedIcon='Home') {

    const [selected, setSelected] = useState(initialSelectedIcon) //18:23
    return (
        <div className={style.wrapper}>
        <div className={style.twitterIconContainer}>
            <VscTwitter />
        </div>
        <div className={style.navContainer}>
        <SidebarOption
          Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          text='Home'
          isActive={Boolean(selected === 'Home')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Explore' ? FaHashtag : BiHash}
          text='Explore'
          isActive={Boolean(selected === 'Explore')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          text='Notifications'
          isActive={Boolean(selected === 'Notifications')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          text='Messages'
          isActive={Boolean(selected === 'Messages')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text='Bookmarks'
          isActive={Boolean(selected === 'Bookmarks')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text='Lists'
          isActive={Boolean(selected === 'Lists')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          text='Profile'
          isActive={Boolean(selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/profile'}
        />

          <SidebarOption Icon={CgMoreO} text='More' setSelected={setSelected}/>  
            
            
            
            
            {/**17:15 */}
            {/* <div>Home</div> */}
            {/* <div>Explore</div>
            <div>Notifications</div>
            <div>Messages</div>
            <div>Bookmarks</div>
            <div>Profile</div>
            <div>More</div> */}
            <div className={style.tweetButton}>Mint</div>
        </div>

        <div className={style.profileButton}>
            <div className={style.profileLeft}></div>
            <div className={style.profileRight}>
                <div className={style.details}>
                    <div className={style.name}>Asjadh</div>
                    <div className={style.handle}>N...</div>
                </div>
                <div className={style.moreContainer}>
                    <FiMoreHorizontal />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;