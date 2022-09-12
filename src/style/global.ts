import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --pink-1: #FD377E;
    --pink-2: #E34981;
    --green: #03B898;
    --gray-1: #212529;
    --gray-2: #868E96;
    --gray-3: #E9ECEF;
    --gray-4: #F8F9FA;
    --gray-5: #343A40;
    --white: #FFFFFF;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    font-size: unset;
    font-weight: unset;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

button{
    cursor: pointer;
}
`;
