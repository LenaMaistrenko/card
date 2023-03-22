import React from 'react';
import { useState, useEffect } from 'react';
import c from './Card.module.css';

export function Card() {
  const isFollowing = localStorage.getItem('isFollowing');
  const numFollowers = localStorage.getItem('numFollowers');

  const [following, setFollowing] = useState(
    isFollowing === 'true' ? isFollowing : false
  );
  const [followers, setFollowers] = useState(100500);
  const [buttonText, setButtonText] = useState(
    following ? 'Following' : 'Follow'
  );
  const tweets = 777;

  useEffect(() => {
    if (isFollowing) {
      setFollowing(isFollowing === 'true');
    }
    if (numFollowers) {
      setFollowers(parseInt(numFollowers));
    }
  }, [isFollowing, numFollowers]);

  function handleClick() {
    if (following) {
      setFollowing(false);
      setFollowers(followers - 1);
      setButtonText('Follow');
      localStorage.setItem('isFollowing', 'false');
      localStorage.setItem('numFollowers', followers - 1);
    } else {
      setFollowing(true);
      setFollowers(followers + 1);
      setButtonText('Following');
      localStorage.setItem('isFollowing', 'true');
      localStorage.setItem('numFollowers', followers + 1);
    }
  }
  return (
    <>
      <div className={c.cardContainer}>
        <ul className={c.cardList}>
          <li className={c.cardItem}>
            <div className={c.cardBg}>
              <div className={c.cardLogo}></div>
            </div>
            <div className={c.cardAvatarLine}>
              <div className={c.cardAvatar}></div>
              <div className={c.cardLine}></div>
            </div>
            <p className={c.cardText}>{`${tweets} Tweets`}</p>
            <p
              className={c.cardText}
            >{`${followers.toLocaleString()} Followers`}</p>
            <button
              type="button"
              onClick={handleClick}
              className={following ? c.cardButtonActive : c.cardButton}
            >
              {buttonText}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
