import {
  Section,
  Title,
  List,
  Item,
  Percentage,
  Label,
} from './Statistics.styled';
import { randColor } from '../../Utils/utils';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title> Upload stats</Title>}

    <List>
      {stats.map(el => (
        <Item key={el.id} style={{ backgroundColor: randColor() }}>
          <Label>{el.label}</Label>
          <Percentage>{el.percentage}%</Percentage>
        </Item>
      ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
