import { useContext, useEffect, useState } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
// import Modal from 'react-modal'
// import ProfileImageMinter from './mintingModal/ProfileImageMinter'
// import { customStyles } from '../../lib/constants'

// Modal.setAppElement('#__next')

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

// interface Tweets {
//   tweet: string
//   timestamp: string
// }

// interface UserData {
//   name: string
//   profileImage: string
//   coverImage: string
//   walletAddress: string
//   tweets: Array<Tweets>
//   isProfileImageNft: Boolean | undefined
// }

const ProfileHeader = () => {
  // const { currentAccount, currentUser } = useContext(TwitterContext)
  const router = useRouter()
  const isProfileImageNft = false;
  const currentAccount = '02020202022'
  // const [userData, setUserData] = useState<UserData>({
  //   name: '',
  //   profileImage: '',
  //   coverImage: '',
  //   walletAddress: '',
  //   tweets: [],
  //   isProfileImageNft: undefined,
  // })

  // useEffect(() => {
  //   if (!currentUser) return

  //   setUserData({
  //     name: currentUser.name,
  //     profileImage: currentUser.profileImage,
  //     walletAddress: currentUser.walletAddress,
  //     coverImage: currentUser.coverImage,
  //     tweets: currentUser.tweets,
  //     isProfileImageNft: currentUser.isProfileImageNft,
  //   })
  // }, [currentUser])

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton}> {/**45:55 If I press take me to the home page */}
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          {/* <div className={style.primary}>{userData.name}</div>
          <div className={style.secondary}>
            {userData.tweets?.length} Tweets
          </div> */}

        <div className={style.primary}>Mohamed Asjadh</div>
          <div className={style.secondary}>
            4 Tweets
          </div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          // src={userData.coverImage}
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt='cover'
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          // className={
          //   currentUser.isProfileImageNft ? 'hex' : style.profileImageContainer
          // }
          className={
              isProfileImageNft ? 'hex' : style.profileImageContainer
          }
        >
          <img
            // src={userData.profileImage}
            // alt={userData.walletAddress}
            src="https://media-exp1.licdn.com/dms/image/C5603AQFdx8bLItgPdQ/profile-displayphoto-shrink_200_200/0/1631714224306?e=1648080000&v=beta&t=P4adM8wGf6P-lM0rDCqhq3jYkZ8uvI-X2ci3yyne2BY"
            alt='profile picture'
            // className={
            //   currentUser.isProfileImageNft
            //     ? style.profileImageNft
            //     : style.profileImage
            // }

            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          {/* <div className={style.primary}>{currentUser.name}</div> */}
          <div className={style.primary}>Mohamed Asjadh</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  )
}

export default ProfileHeader;