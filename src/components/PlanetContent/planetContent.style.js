import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 472px;
  width: 445px;
  margin-left: 80px;

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
`;
