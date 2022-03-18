import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    --darkBlue: #0B0D17;
    --purple: #D0D6F9;
    --white: #fff;
    --heading1: 150px 'Bellefair', serif;
    --heading2: 100px 'Bellefair', serif;
    --heading3: 56px 'Bellefair', serif;
    --heading4: 32px 'Bellefair', serif;
    --heading5: 28px 'Barlow Condensed', sans-serif;
    --subHeading1: 28px 'Bellefair', serif;
    --subHeading2: 14px 'Barlow Condensed', sans-serif;
    --navText: 16px 'Barlow Condensed', sans-serif;
    --bodyText: sans-serif
  }

  h1 {
    color: var(--darkBlue);
  }
`;
