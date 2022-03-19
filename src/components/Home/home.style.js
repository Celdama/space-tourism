import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #fff;
  background: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-size: cover;
  height: 100%;
  padding-bottom: 60px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;

  .content {
    width: 450px;

    .heading {
      font: var(--heading5);
      letter-spacing: 4.75px;
      line-height: 34px;
      color: var(--purple);
      text-transform: uppercase;
    }

    .big {
      font: var(--heading1);
      text-transform: uppercase;
      margin: 0;
    }

    .body {
      font: var(--bodyText);
      color: var(--purple);
      line-height: 32px;
    }
  }

  .action {
    width: 274px;
    outline: 1px solid wheat;
    height: 274px;
    color: #0b0d17;
    background-color: white;
    border-radius: 137px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font: var(--heading4);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
