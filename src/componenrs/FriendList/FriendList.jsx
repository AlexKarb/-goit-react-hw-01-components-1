import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <List>
    <FriendListItem friends={friends} />
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
