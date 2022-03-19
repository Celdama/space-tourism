import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 1047px;
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: start;
  color: white;

  h1 {
    text-transform: uppercase;
    font: var(--heading5);
    letter-spacing: 4.725px;
  }
`;
