import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  key: PropTypes.number,
};

export default FriendList;
