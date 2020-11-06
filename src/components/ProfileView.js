import React from 'react';

const ProfilePreview = (props) => {

//const { username, likes, thumbnailUrl, bio} = props;
// so the props doesn need to be repeated below;

return (
    <div>
        <h2>
            {props.username}
        </h2>
        <p>Likes: {props.likeCount}</p>
        <img src={props.thumbnailUrl} alt="Thumbnail" />
        <h4>Bio</h4>
        <p>{props.bio}</p>
    </div>
)

}
export default ProfilePreview;