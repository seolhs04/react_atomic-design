import { css } from "styled-components";

const mediaQuery = (options: string) => {
  return css`
    @media all and (max-width: 768px) {
      ${options};
    }
  `;
};
export default mediaQuery;
