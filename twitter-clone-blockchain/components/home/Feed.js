import { useContext, useEffect } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import TweetBox from './TweetBox'
import Post from '../Post'
import { BsStars } from 'react-icons/bs'
// import { text } from 'stream/consumers'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] `,
  // wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}


const tweets = [
  {
    displayName: 'Asjadh',
    userName: 'mohamed_asjadh',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQGxfGt4yQnBRA/profile-displayphoto-shrink_100_100/0/1647323485620?e=2147483647&v=beta&t=Smu4EU5zyXHq0yFDAWQAA73z9P4jPV6nzjmAZZC6y_c',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-02-21T12:00:00.000Z',
  },
]


// interface Tweet {
//   author: TweetAuthor
//   tweet: string
//   timestamp: string
// }

// interface TweetAuthor {
//   name: string
//   walletAddress: string
//   profileImage: string
//   isProfileImageNft: boolean
// }

function Feed() {
//   const { tweets } = useContext(TwitterContext)

  return (
    <div className={`${style.wrapper} no-scrollbar`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
    
            {tweets.map((tweet,index)=>(
                <Post 
                    key={index}
                    displayName={tweet.displayName}
                    userName={tweet.userName}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}



      {/* {tweets.map((tweet: Tweet, index: number) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4,
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4,
          )}...${tweet.author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))} */}
    </div>
  )
}

export default Feed