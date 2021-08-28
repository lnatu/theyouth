import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    dark: '#0C0C0C',
    dark2: '#0e0e0e',
    dark3: '#222222',
    grey2: '#4f4f4f',
    grey3: '#828282',
    grey4: '#bdbdbd',
    grey5: '#e1e1e1',
    grey6: '#e0e0e0',
    warning: '#fcb500',
  },
};

export const GlobalStyle = createGlobalStyle`

  :root {
    --color-white: #fff;
    --color-warning: #fcb500;
    --color-grey-2: #4f4f4f;
    --color-grey-4: #bdbdbd;
    --color-grey-6: #e0e0e0;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(/static/fonts/Firasans-ExtraBold.ttf) format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(/static/fonts/Firasans-Bold.ttf) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(/static/fonts/Firasans-Medium.ttf) format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(/static/fonts/Firasans-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(/static/fonts/Firasans-Light.ttf) format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  :focus {
    outline: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  html {
    font-size: 62.5%; /* 1 */
    -webkit-text-size-adjust: 62.5%; /* 2 */
    -ms-text-size-adjust: 62.5%; /* 2 */
  }

  a:focus {
    outline: thin dotted;
  }

  a {
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  img {
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */
  }

  figure {
    margin: 0;
  }

  form {
    margin: 0;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0; /* 1 */
    padding: 0;
    white-space: normal; /* 2 */
    *margin-left: -7px; /* 3 */
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
  }

  button,
  input {
    line-height: normal;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
    *overflow: visible;  /* 4 */
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    *height: 13px; /* 3 */
    *width: 13px; /* 3 */
  }

  input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  button,
  input,
  select,
  textarea {
    color: #222;
  }


  ::-moz-selection {
    background: var(--color-warning);
    text-shadow: none;
    color: #000000;
  }

  ::selection {
    background: var(--color-warning);
    text-shadow: none;
    color: #000000;
  }

  img {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  .swiper-pagination {
    position: static;
    order: 2;
    margin-top: 4rem;
  }

  .swiper-pagination-bullet {
    height: 3px;
    width: 12px;
    background-color: #828282;
    border-radius: 5px;
    display: inline-block;
    opacity: 1;

    transition: all .3s;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 40px;
    background-color: #F5DC4B;
  }

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }

  .vision-slide {
    height: 360px;
    padding-left: 20px;
  } 

  @media only screen and (max-width: 25.875em) {
    .vision-slide {
      height: 240px;
    } 
  }

  @media only screen and (max-width: 23.4375em) {
    .vision-slide {
      height: 177px;
    } 
  }

  .vision-slide .swiper-pagination {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
  }

  .vision-slide .swiper-pagination .swiper-pagination-bullet {
    width: 3px;
    height: 12px;
  }

  .vision-slide .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 3px;
    height: 40px;
  }

  // GSAP
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-hidden {
    overflow: hidden;
  }
`;
