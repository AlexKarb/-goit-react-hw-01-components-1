import { Item, Status, Avatar, Name } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) =>
  friends.map(({ id, avatar, name, isOnline }) => (
    <Item key={id}>
      <Status status={isOnline} />
      <Avatar src={avatar} alt={`${name} avatar`} width="48" />
      <Name>{name}</Name>
    </Item>
  ));

FriendListItem.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
