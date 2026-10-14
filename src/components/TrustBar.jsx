import { AnimatePresence, m } from "framer-motion";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import TrustStat from "./TrustStat.jsx";

const MotionDiv = m.div;

export default function TrustBar({ isMobile }) {
  return (
    <>
                      <Reveal style={{ width: "100%" }}>
                      <View
                        nativeID="trust-bar"
                        style={[
                          tw`mx-auto w-full max-w-[1120px] flex-col items-center`,
                          styles.trustBar,
                          {
                            flexDirection: "column",
                            alignItems: "center",
                            paddingHorizontal: isMobile ? 16 : 26,
                            marginBottom: isMobile ? 28 : 38,
                          },
                        ]}
                      >
                        <View style={[styles.trustIntro, { flexBasis: "100%", alignItems: "center", paddingLeft: 0 }, isMobile && { paddingBottom: 13, marginBottom: 9 }]}>
                          <Text style={styles.trustOverline}>ENERGY YOU CAN COUNT ON</Text>
                          <Text style={styles.trustIntroText}>Built on trust. Powered by the sun.</Text>
                        </View>
                        <View nativeID="trust-stats" style={tw`w-full flex-row items-stretch`}>
                          <TrustStat icon="✦" value="500+" label="Installations" color="#facc15" mobile={isMobile} />
                          <TrustStat icon="⌁" value="10+" label="Years Experience" color="#34d399" mobile={isMobile} />
                          <TrustStat icon="◷" value="24/7" label="Support" color="#77b9ff" mobile={isMobile} />
                        </View>
                      </View>
                      </Reveal>
    </>
  );
}
