import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  box-shadow: var(--shadow);
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeаderRow = styled.thead`
  background-color: #1eb0d4b0;
  color: var(--second-bg-color);
`;

export const TBody = styled.tbody`
  background-color: var(--main-bg-color);
  tr:nth-child(2n-1) {
    background-color: var(--second-bg-color);
  }
`;

export const Title = styled.th`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  padding: 12px;

  border-right: var(--border);
  :last-child {
    border-right: none;
  }
`;

export const TableData = styled.td`
  color: var(--second-text-color);
  padding: 10px;
  text-align: center;
  text-transform: capitalize;

  border-right: var(--border);
  :last-child {
    border-right: none;
  }
`;
