import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
:root{
   --btn-color: hsl(257, 7%, 63%);
   --secondary-300: hsl(0, 87%, 67%),
}

*{
    font-family: 'Poppins', sans-serif;
}
body{
    font-weight: 700;
    line-height: 1.2;
    font-size: 18px;
}

`