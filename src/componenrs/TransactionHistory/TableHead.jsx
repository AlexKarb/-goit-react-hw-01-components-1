import { HeаderRow, Title } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TableHead = ({ title }) => (
  <HeаderRow>{createTableTitle(title)}</HeаderRow>
);

function createTableTitle(namesOfTitle) {
  return (
    <tr>
      {namesOfTitle.map(name => (
        <Title key={name}>{name}</Title>
      ))}
    </tr>
  );
}

TableHead.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string.isRequired),
};
