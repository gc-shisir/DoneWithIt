import React from "react";
import { Text } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

// const styles = StyleSheet.create({
//   text: {
//     color: colors.black,
//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir",
//       },
//       android: {
//         fontSize: 18,
//         fontFamily: "Roboto",
//       },
//     }),
//   },
// });

export default AppText;
