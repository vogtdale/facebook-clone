import React from 'react'
import './Feed.css'
import StoryReel from './storyreel/StoryReel'
import MessageSender from './messageSender/MessageSender'
import Post from './post/Post'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://www.w3schools.com/howto/img_avatar2.png"
                message="some dummy message "
                timestamp="saturday 3 November "
                username="bob marley"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsc3Wb3Ard3vWP2CVFjRakT0gszvZCkw6NAg&usqp=CAU"
            />
        </div>
    )
}

export default Feed
