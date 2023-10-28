import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-light-regular-18: Poppins;

/* font sizes */
--body-light-regular-18-size: 18px;
--heading-1-bold-48-size: 48px;

/* Colors */
--white-color: #fff;
--light-color-1: #737b86;
--secondary-1: #f78719;
--primary-1: #1575a7;

/* Border radiuses */
--br-9xs: 4px;
--br-5xs: 8px;

}
`;
