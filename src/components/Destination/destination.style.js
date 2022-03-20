import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-size: cover;
  display: flex;
  align-items: center;

  .grid {
    width: 1047px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 0.5fr repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    color: white;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
    h1 {
      text-transform: uppercase;
      font: var(--heading5);
      letter-spacing: 4.725px;
    }
  }
  .div2 {
    grid-area: 2 / 2 / 3 / 3;
    margin-left: 40px;
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      gap: 10px;
      font: var(--navText);
      letter-spacing: 2.7px;
      line-height: 19px;
      color: var(--purple);
    }
  }
  .div3 {
    grid-area: 2 / 1 / 7 / 2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* img {
      width: 445px;
      height: 445px;
    } */
  }
  .div4 {
    grid-area: 3 / 2 / 7 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 472px;
    width: 445px;
    margin-left: 40px;

    h2 {
      font: var(--heading2);
      text-transform: uppercase;
      padding: 0;
      margin: 0;
      line-height: 115px;
    }

    p {
      font: var(--bodyText);
      line-height: 32px;
      color: var(--purple);
    }
    .divider {
      height: 1px;
      background-color: #fff;
      opacity: 0.25;
      z-index: 10;
      margin-top: 40px;
    }
    .info {
      display: flex;

      .distance,
      .travel {
        display: flex;
        flex-direction: column;
        width: 50%;

        .title {
          font: var(--subHeading2);
          text-transform: uppercase;
          color: var(--purple);
        }

        .data {
          font: var(--subHeading1);
          text-transform: uppercase;
        }
      }
    }
  }
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
