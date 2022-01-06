import { Item, Number } from './Stats.styled';
import PropTypes from 'prop-types';

export const StatsItem = ({ title, number }) => (
  <Item>
    <span>{title}</span>
    <Number>{number}</Number>
  </Item>
);

StatsItem.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
