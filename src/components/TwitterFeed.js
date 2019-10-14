import React from 'react';
// import Forecast from './Forecast';
import Tweet from './Tweet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatarIcon from '../images/avatar.svg';


function TwitterFeed() {

  const data = [
    {
      uniqueId: 1,
      avatarIcon: avatarIcon,
      tweetContent: 'Lorem aslkfn adsof a s s a 32noviwana 13 rfwlek'
    },
    {
      uniqueId: 2,
      avatarIcon: avatarIcon,
      tweetContent: 'Lorem aslkfn adsof a s s a 32noviwana 13 rfwlek'
    },
    {
      uniqueId: 3,
      avatarIcon: avatarIcon,
      tweetContent: 'Lorem aslkfn adsof a s s a 32noviwana 13 rfwlek'
    }

  ]
    ;



  return (
    <div className="twitter-feeds">
      <div className="twitter-feeds__header">
        <span><FontAwesomeIcon icon={faTwitter} /></span>
        <h1>Twitter Feed</h1>
        <span className="twitter-feeds__city">france</span>
      </div>

      <ul className="twitter-feeds__tweets-list">
        {
          data.map(item => (
            <Tweet key={item.uniqueId} props={item} />
          ))
        }
      </ul>

      <button className="twitter-feeds__next-button">next</button>
    </div>
  );

}

export default TwitterFeed;

