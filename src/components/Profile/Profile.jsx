import PropTypes from 'prop-types';
import styles from './Profile.module.css'; //не работает без ./

const Profile = user => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <div className={styles.profile} key={tag}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
// задать инлайн стиль bg вызовом ф-ции
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

console.log(getRandomHexColor());

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.string,
      views: PropTypes.string,
      likes: PropTypes.string,
    }).isRequired,
  }),
};

export default Profile;
