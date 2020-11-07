import React, { useState}  from 'react';

const ProfilePreview = (props) => {
    const { username, likeCount, thumbnailUrl, bio} = props.data;

    // const [likes, setLikes] = useState(props.data.likeCount)
    const [likes, setLikes] = useState(likeCount)

    console.log(props);
// so the props doesn need to be repeated below;

const containerStyle = {
    borderRadius:5,
    padding: 50,
    border: "1px solid gray",
    marginBottom: 20,
    boxShadow: "10px 5px 5px darkgray",
    maxWidth: 250
}

const imgStyle = {
    borderRadius: "200px",
    boxShadow: "10px 5px 5px gray"
}

    return (
        <div style={containerStyle}>
            <h2>
                {username}
            </h2>
            <p>
            <i class="fas fa-thumbs-up"></i>
                <span role="img" 
                aria-label="Thumbs up"
                style= {{cursor:"pointer"}}
                 onClick={(event) => {
                     console.log(props.data.likeCount)
                    setLikes(likes +1);                    
                    }}
                
                >  &#128077;</span>
                 {likes}</p>
            <img style={imgStyle} width="100%" src={thumbnailUrl} alt="Thumbnail" />
            <h4>Bio</h4>
            <p>{bio}</p>
        </div>
    )

    }
export default ProfilePreview;