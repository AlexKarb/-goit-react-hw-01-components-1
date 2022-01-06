import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  background-color: var(--main-bg-color);
  height: 80px;
  width: 100%;
  border-top: var(--border);
  border-radius: 0 0 11px 11px;
`;

export const Item = styled.li`
  border-right: var(--border);
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :last-child {
    border-right: none;
  }
`;

export const Number = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-black);
  margin-top: 2px;
`;
