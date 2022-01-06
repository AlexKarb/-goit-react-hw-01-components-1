import { TableData, TBody } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TableBody = ({ items }) => (
  <TBody>
    {items.map(({ id, ...rest }) => (
      <tr key={id}>{createTableData(rest)}</tr>
    ))}
  </TBody>
);

function createTableData(data) {
  const namesOfRows = Object.keys(data);
  return namesOfRows.map(name => (
    <TableData key={name}>{data[name]}</TableData>
  ));
}

TableBody.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
