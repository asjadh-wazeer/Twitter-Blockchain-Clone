import { useEffect, useContext, useState } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
    { displayName: 'Asjadh',
     userName: 'aaaaaaaaaaaaaaaaa',
     avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQFdx8bLItgPdQ/profile-displayphoto-shrink_200_200/0/1631714224306?e=1648080000&v=beta&t=P4adM8wGf6P-lM0rDCqhq3jYkZ8uvI-X2ci3yyne2BY',
     text: 'gm',
     isProfileImageNft: false,
     timestamp: "2022-02-21T12:00:00.000Z",
 
     },
     { displayName: 'Asjadh',
     userName: 'aaaaaaaaaaaaaaaaa',
     avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQFdx8bLItgPdQ/profile-displayphoto-shrink_200_200/0/1631714224306?e=1648080000&v=beta&t=P4adM8wGf6P-lM0rDCqhq3jYkZ8uvI-X2ci3yyne2BY',
     text: 'gm',
     isProfileImageNft: false,
     timestamp: "2022-02-21T12:00:00.000Z",
 
     }
 ]


// interface Tweet {
//   timestamp: string
//   tweet: string
// }

// interface Tweets extends Array<Tweet> {}

// interface Author {
//   name: string
//   profileImage: string
//   walletAddress: string
//   isProfileImageNft: Boolean | undefined
// }

const ProfileTweets = () => {
//   const { currentUser } = useContext(TwitterContext)
//   const [tweets, setTweets] = useState<Tweets>([
//     {
//       timestamp: '',
//       tweet: '',
//     },
//   ])
//   const [author, setAuthor] = useState<Author>({
//     name: '',
//     profileImage: '',
//     walletAddress: '',
//     isProfileImageNft: undefined,
//   })

//   useEffect(() => {
//     if (!currentUser) return

//     setTweets(currentUser.tweets)
//     setAuthor({
//       name: currentUser.name,
//       profileImage: currentUser.profileImage,
//       walletAddress: currentUser.walletAddress,
//       isProfileImageNft: currentUser.isProfileImageNft,
//     })
//   }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        // <Post
        //   key={index}
        //   displayName={
        //     author.name === 'Unnamed'
        //       ? `${author.walletAddress.slice(
        //           0,
        //           4,
        //         )}...${author.walletAddress.slice(41)}`
        //       : author.name
        //   }
        //   userName={`${author.walletAddress.slice(
        //     0,
        //     4,
        //   )}...${author.walletAddress.slice(41)}`}
        //   text={tweet.tweet}
        //   avatar={author.profileImage}
        //   timestamp={tweet.timestamp}
        //   isProfileImageNft={author.isProfileImageNft}
        // />

        <Post
          key={index}
          displayName="Mohamed Asjadh"
          userName={`${tweet.userName.slice(
            0,
            4,
          )}...${tweet.userName.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets