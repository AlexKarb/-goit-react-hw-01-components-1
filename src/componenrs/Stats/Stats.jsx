import { List } from './Stats.styled';
import { StatsItem } from './StatsItem';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => {
  const Items = Object.keys(stats).map(el => (
    <StatsItem key={el} title={el} number={stats[el]} />
  ));

  return <List>{Items}</List>;
};

Stats.propType = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
