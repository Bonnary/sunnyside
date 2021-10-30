import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
    }
    :root{
        --title: 'Fraunces', serif;
        --title-weight: 600;
        --des: 'Barlow', sans-serif;
        --des-thick: 900;
        --des-thin: 700;

        /* Primary */
        --Soft-red: hsl(7, 99%, 70%);
        --Light-blue: #3DBEFF;
        --Yellow: hsl(51, 100%, 49%);
        --Dark-cyan: hsl(167, 40%, 24%);
        --Dark-blue : hsl(198, 62%, 26%);
        --moderate-cyan: #90D4C5;
        /* Neutral */
        --Very-dark-blue: hsl(212, 27%, 19%);
        --Very-grayish-blue: hsl(213, 9%, 39%);
        --Dark-grayish-blue: hsl(232, 10%, 55%);
        --Grayish-blue: hsl(210, 4%, 67%);

    }
`;

export default GlobalStyles;
