import React from 'react';
import { FullPage} from "../styles/fullPage.js";
import styled from "styled-components";

const YellowBackground = styled(FullPage)`
  background-color: yellow;
  color: black;
`;

const GradientBackground = styled(FullPage)`
  background-image: radial-gradient(
          farthest-corner at 40px 40px,
          #f35 0%,
          #43e 100%
  );
  color: purple;
`




const Dec30 = () => {
    return (
        <>
            <YellowBackground>
                <h2>A thought</h2>
            </YellowBackground>
            <GradientBackground>
                <h2>More thoughts</h2>
            </GradientBackground>
        </>
    );
};

export default Dec30;