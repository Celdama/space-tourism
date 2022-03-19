import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 1047px;
  margin-top: 20px;
  height: 500px;
  justify-content: space-between;

  .planet {
    width: 445px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 445px;
      height: 445px;
    }
  }

  .desc {
    width: 445px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      display: flex;
      list-style: none;
      padding: 0;
      gap: 6px;
      font: var(--navText);
      letter-spacing: 2.7px;
      line-height: 19px;
      color: var(--purple);
    }

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
