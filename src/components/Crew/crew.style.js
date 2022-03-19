import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 100%;
`;
