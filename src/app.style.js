import styled from 'styled-components';

export const Wrapper = styled.div`
  outline: 1px solid red;
  background: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-size: cover;
  height: 100vh;
`;
