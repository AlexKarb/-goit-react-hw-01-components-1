import styled from 'styled-components';

export const Section = styled.section`
  border: var(--border);
  margin: 30px auto;
  width: 300px;
`;

export const Title = styled.h2`
  line-height: 1.08;
  font-size: 20px;
  height: 70px;
  padding: 3px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--second-text-color);
  background-color: var(--second-bg-color);
  text-transform: uppercase;
`;

export const List = styled.ul`
  font-size: 16px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-top: var(--border);
  color: var(--second-bg-color);
  background-color: var(--second-text-color);
`;

export const Item = styled.li`
  border-right: var(--border);
  flex: 1;
  min-width: 70px;
  height: 66px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  padding-top: 4px;
`;

export const Percentage = styled.span`
  font-size: 22px;
  margin-top: 8px;
`;
