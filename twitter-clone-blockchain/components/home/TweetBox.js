import { useState, useContext } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
// import { client } from '../../lib/client'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
//   const { currentAccount, fetchTweets, currentUser } = useContext(TwitterContext)

  const postTweet = (event) => { //28:30
    event.preventDefault()

    console.log(tweetMessage)
  }

//   const submitTweet = async (event: any) => {
//     event.preventDefault()

//     if (!tweetMessage) return
//     const tweetId = `${currentAccount}_${Date.now()}`

//     const tweetDoc = {
//       _type: 'tweets',
//       _id: tweetId,
//       tweet: tweetMessage,
//       timestamp: new Date(Date.now()).toISOString(),
//       author: {
//         _key: tweetId,
//         _ref: currentAccount,
//         _type: 'reference',
//       },
//     }

//     await client.createIfNotExists(tweetDoc)

//     await client
//       .patch(currentAccount)
//       .setIfMissing({ tweets: [] })
//       .insert('after', 'tweets[-1]', [
//         {
//           _key: tweetId,
//           _ref: tweetId,
//           _type: 'reference',
//         },
//       ])
//       .commit()

//     await fetchTweets()
//     setTweetMessage('')
//   }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQFdx8bLItgPdQ/profile-displayphoto-shrink_200_200/0/1631714224306?e=1648080000&v=beta&t=P4adM8wGf6P-lM0rDCqhq3jYkZ8uvI-X2ci3yyne2BY"
          className={style.profileImage}
          alt="Profile Image"
        />
      </div>

      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            className={style.inputField}
          />
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            <button
              type='submit'
              onClick={event => submitTweet(event)}
              disabled={!tweetMessage}

              //If I type anything, Button color -> Dark Blue 28:50
              className={`${style.submitGeneral} ${ 
                tweetMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox