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
    margin-left: 80px;
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
  }
  .div4 {
    grid-area: 3 / 2 / 7 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 472px;
    width: 445px;
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
