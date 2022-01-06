import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 320px;
  padding: 10px;
  margin: 0 auto 30px auto;
`;

export const Item = styled.li`
  color: var(--color-black);
  background-color: var(--second-bg-color);
  box-shadow: var(--shadow);
  padding: 6px 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? '#029b1c' : '#e04242')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background-color: var(--color-grey);
  margin-left: 12px;
  margin-right: 12px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
