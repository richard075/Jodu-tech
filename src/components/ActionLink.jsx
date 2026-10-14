import { m } from "framer-motion";
import { Pressable, Text } from "react-native";
import tw from "twrnc";
import { YELLOW } from "../constants.js";

const MotionDiv = m.div;

function ActionLink({ children, onPress, primary = false, style, nativeID }) {
  return (
    <MotionDiv whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Pressable
        accessibilityRole="link"
        nativeID={nativeID}
        onPress={onPress}
        style={[
          tw`flex-row items-center justify-center px-5 py-4`,
          {
            minHeight: 50,
            borderColor: YELLOW,
            borderWidth: 1,
          },
          style,
        ]}
      >
        <Text
          style={{
            color: primary ? YELLOW : "#edf2f8",
            fontSize: 11,
            fontWeight: "700",
          }}
        >
          {children}
        </Text>
      </Pressable>
    </MotionDiv>
  );
}

export default ActionLink;
