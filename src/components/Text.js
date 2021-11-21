import React from "react";
import styled from "styled-components/native";

const handleFontSize = ({ title, large, medium, small, tiny }) => {
  switch (true) {
    case title:
      return "32px";
    case large:
      return "18px";
    case medium:
      return "15px";
    case small:
      return "11px";
    case tiny:
      return "10px";

    default:
      return "13px";
  }
};

const handleFontWeight = ({ light, bold, heavy, block }) => {
  switch (true) {
    case light:
      return `200`;
    case bold:
      return `600`;
    case heavy:
      return `700`;
    case block:
      return `900`;

    default:
      return `400`;
  }
};

const handleTextAlignment = ({ center, right }) => {
  switch (true) {
    case center:
      return `center`;
    case right:
      return `right`;

    default:
      return `left`;
  }
};

const Text = styled.Text`
  color: ${(props) => props.color ?? "#D8D8D8"};
  font-family: "Avenir";
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  font-size: ${({ title, large, medium, small, tiny }) =>
    handleFontSize({ title, large, medium, small, tiny })};
  font-weight: ${({ light, bold, heavy, block }) =>
    handleFontWeight({ light, bold, heavy, block })};
  text-align: ${({ center, right }) => handleTextAlignment({ center, right })};
`;

const TextStyle = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

export default TextStyle;
