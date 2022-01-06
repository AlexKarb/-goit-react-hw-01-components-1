import { Container, Name, Avatar } from './Description.styled';
import PropTypes from 'prop-types';

export const Description = ({
  userdate: { username, avatar, tag, location },
}) => (
  <Container>
    <Avatar src={avatar} alt={`${username} avatar`} />
    <Name>{username}</Name>
    <p>@{tag}</p>
    <p>{location}</p>
  </Container>
);

Description.propTypes = {
  userdate: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
