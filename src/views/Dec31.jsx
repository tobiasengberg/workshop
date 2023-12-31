import React from 'react';
import { FullPage} from "../styles/fullPage.js";
import styled from "styled-components";

const LinearGradient = styled(FullPage)`
  background-image: linear-gradient(45deg, blue, red);
  background-clip: content-box;
  padding: 50px;
  box-sizing: border-box;
`;

const Clipped = styled(FullPage)`
  background-color: purple;
  clip-path: circle(30vw);
  position: relative;
  & h2 {
    mix-blend-mode: overlay;
    padding: 50vh 23vw;
    color: pink;
  }
`;


const Dec31 = () => {
    return (
        <>
            <LinearGradient>
                <h2>A thought</h2>
            </LinearGradient>
            <Clipped>
                <h2>More thoughts</h2>
            </Clipped>
        </>
    );
};

export default Dec31;