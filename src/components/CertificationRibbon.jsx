import { AnimatePresence, m } from "framer-motion";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import TrustStat from "./TrustStat.jsx";

const MotionDiv = m.div;

export default function CertificationRibbon({ isMobile }) {
  return (
    <>
                      <View
                        style={[
                          tw`flex-row items-center justify-center`,
                          styles.ribbon,
                          isMobile && { marginHorizontal: -12, paddingHorizontal: 12, gap: 8 },
                        ]}
                      >
                        <Text style={{ color: "#34d399", fontSize: 15 }}>✓</Text>
                        <Text style={styles.ribbonText}>Licensed &amp; Certified Solar Installer</Text>
                        <Text style={{ color: YELLOW, fontSize: 12 }}>✳</Text>
                        <Text style={styles.ribbonText}>Warranty up to 25 Years</Text>
                        {!isMobile && (
                          <Pressable accessibilityRole="link" onPress={() => window.open(LINK, "_blank", "noopener,noreferrer")}>
                            <Text style={{ color: YELLOW, fontSize: 10, fontWeight: "700", marginLeft: 12 }}>
                              Talk to an expert →
                            </Text>
                          </Pressable>
                        )}
                      </View>
    </>
  );
}
