import { TableHead } from './TableHead';
import { Table } from './TransactionHistory.styled';
import { TableBody } from './TableBody';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead title={['type', 'amount', 'currency']} />
    <TableBody items={items} />
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
