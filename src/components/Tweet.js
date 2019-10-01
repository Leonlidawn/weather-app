import React from 'react';
//placeholders ==========
//             ==========

function Tweet({ props }) {
  console.log(props)
  return (
    <>
      < li className="tweet" >

        <img src="{props.avatarIcon} " alt="avatar" className="tweet__avatar" />
        <p className="tweet__content">{props.tweetContent}</p>
      </li>
    </>

  );

}
export default Tweet;