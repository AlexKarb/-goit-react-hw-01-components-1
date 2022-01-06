import { UserCard } from './Profile.styled';
import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';
import PropTypes from 'prop-types';

export const Profile = ({ user }) => (
  <UserCard>
    <Description userdate={user} />
    <Stats stats={user.stats} />
  </UserCard>
);

Profile.propType = {
  user: PropTypes.shape({
    stats: PropTypes.shape().isRequired,
  }).isRequired,
};
