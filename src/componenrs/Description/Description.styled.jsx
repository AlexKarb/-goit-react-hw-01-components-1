import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;

  p {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const Avatar = styled.img`
  width: 130px;
  border-radius: 50%;

  border: var(--border);
  margin-bottom: 25px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: var(--color-black);
  text-transform: capitalize;
`;
