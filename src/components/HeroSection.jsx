import { Image, Pressable, Text, View } from "react-native";
import { YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import ActionLink from "./ActionLink.jsx";
import tw from "twrnc";
import SunOrb from "./SunOrb.jsx";
import MoonOrb from "./MoonOrb.jsx";

export default function HeroSection({ isMobile, width, height, headlineFontSize, navigate }) {
  return (
              <View
                nativeID="hero-proof"
                style={[
                  tw`items-center`,
                  {
                    flexDirection: "column",
                    alignItems: "center",
                    gap: isMobile ? 12 : 8,
                    alignSelf: "center",
                    width: "100%",
                    maxWidth: 1120,
                    minHeight: Math.max(height - (isMobile ? 80 : 104), 0),
                    justifyContent: isMobile ? "flex-start" : "center",
                    paddingTop: isMobile ? 55 : 66,
                    paddingBottom: isMobile ? 36 : 50,
                    position: "relative",
                  },
                ]}
              >
                <SunOrb />
                <MoonOrb />
                <Reveal style={{ width: "100%" }}>
                <View style={[{ width: "100%" }, styles.heroCopy]}>
                  <View style={[tw`flex-row items-center`, { gap: 9, marginBottom: 20 }]}>
                    <View style={styles.eyebrowDot} />
                    <Text style={styles.eyebrow}>CLEAN POWER. BRIGHTER FUTURE.</Text>
                  </View>
                  <Text
                    nativeID="hero-title"
                    accessibilityRole="header"
                    style={[
                      styles.headline,
                      { fontSize: headlineFontSize, lineHeight: headlineFontSize * 1.1 },
                    ]}
                  >
                    Powering Nigeria with <Text style={{ color: YELLOW }}>Clean Energy</Text>
                  </Text>
                  <Text style={styles.description}>
                    Reliable solar installations designed around your home or business. Take control of
                    your power, lower your bills, and keep life moving.
                  </Text>
                  <View
                    style={[
                      tw`flex-row`,
                      {
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 12,
                        marginTop: 28,
                        flexDirection: isMobile && width <= 420 ? "column" : "row",
                        width: "100%",
                      },
                    ]}
                  >
                    <ActionLink primary onPress={() => navigate("contact")} style={width <= 420 ? { width: "100%" } : null}>
                      Get Free Consultation  →
                    </ActionLink>
                    <ActionLink
                      nativeID="packages"
                      onPress={() => navigate("packages")}
                      style={width <= 420 ? { width: "100%" } : null}
                    >
                      View Solar Packages
                    </ActionLink>
                  </View>
                  <View style={[tw`flex-row items-center`, { gap: 13, marginTop: 24, justifyContent: "center" }]}>
                    <View style={tw`flex-row items-center`}>
                      {["A", "T", "K", "+"].map((initial, index) => (
                        <View key={initial} style={[styles.avatar, styles[`avatar${index}`]]}>
                          <Text style={styles.avatarText}>{initial}</Text>
                        </View>
                      ))}
                    </View>
                    <Text style={styles.trustCaption}>
                      <Text style={{ color: "#dfe7f1", fontWeight: "700" }}>Trusted across Nigeria</Text>
                      {"\n"}Making the switch to dependable energy.
                    </Text>
                  </View>
                </View>
                </Reveal>
    
              </View>
  );
}
