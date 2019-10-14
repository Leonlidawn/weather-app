import React from 'react';
//placeholders ==========
//             ==========

function Tweet({ props, k }) {
  console.log(k)
  return (
    <>
      < li className="tweet" key={k} >
        <img src={props.avatarIcon} alt="avatar" className="tweet__avatar" />
        <p className="tweet__content">{props.tweetContent}</p>
      </li>
    </>

  );

}
export default Tweet;