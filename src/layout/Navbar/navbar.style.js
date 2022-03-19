import styled from 'styled-components';

export const Wrapper = styled.nav`
  color: #fff;
  height: 96px;
  display: flex;
  padding-left: 55px;
  padding-top: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font: var(--navText);
  letter-spacing: 2.7px;

  .divider {
    width: 473px;
    height: 1px;
    background-color: #fff;
    opacity: 0.25;
    z-index: 10;
    margin-left: 10px;
  }

  .nav {
    width: 830px;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);

    ul {
      width: 542px;
      height: 100%;
      display: flex;
      justify-content: space-between;

      li {
        text-transform: uppercase;
      }
    }
  }
`;
