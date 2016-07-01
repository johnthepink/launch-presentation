// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Spectacle,
  Slide,
  Heading,
  S,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// import code styling
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./fonts.css");
require("./code.css");

export const theme = createTheme({
  "primary": "#6bac43",
  "secondary": "#1c683e",
  "tertiary": "#2a4930",

  "dark-primary": "#303030",
  "dark-secondary": "#505050",
  "dark-tertiary": "#858585",

  "light-primary": "#ffffff",
  "light-secondary": "#f7f7f7",
  "light-tertiary": "#dddddd",

  "alert": "#c64f55"
}, {
  primary: "colfax-web",
  secondary: "ff-meta-serif-web-pro",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          {this.props.children}
        </Deck>
      </Spectacle>
    );
  }
}

export const TitleSlide = ({ children }) => (
  <Slide transition={["zoom"]} bgColor="primary">
    {children}
  </Slide>
);

export const Title = ({ children }) => (
  <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
    {children}
  </Heading>
);

export const SubTitle = ({ children }) => (
  <Heading size={8}  textFont="secondary" textColor="light-secondary">
    <S type="italic">{children}</S>
  </Heading>
);

export {
  preloader,
}
