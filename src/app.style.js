import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
