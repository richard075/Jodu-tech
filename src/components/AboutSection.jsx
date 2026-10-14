import { AnimatePresence, m } from "framer-motion";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import TrustStat from "./TrustStat.jsx";

const MotionDiv = m.div;

export default function AboutSection({ isMobile }) {
  return (
    <>
                      <Reveal style={{ width: "100%" }}>
                      <View
                        nativeID="about"
                        style={[
                          tw`mx-auto w-full max-w-[1120px] flex-row items-center justify-center gap-11 py-12`,
                          styles.aboutSection,
                          isMobile && tw`flex-col`,
                        ]}
                      >
                        <View style={[tw`flex-1`, styles.aboutCopy]}>
                          <Text style={[styles.solutionsEyebrow, { textAlign: "left" }]}>ABOUT JODU-TECH</Text>
                          <Text style={[styles.solutionsTitle, { textAlign: "left" }]}>A brighter, more reliable way to power life.</Text>
                          <Text style={styles.aboutDescription}>
                            We help Nigerian homes and businesses take control of their electricity with solar
                            systems designed around how they live and work. From the first conversation to
                            installation and ongoing care, we make the move to cleaner energy clear and
                            dependable.
                          </Text>
                          <View style={[tw`mx-auto mt-6 w-full max-w-[500px] gap-4`, styles.aboutPoints]}>
                            {[
                              ["01", "Designed for your needs", "A system sized around your space and energy use."],
                              ["02", "Built for everyday reliability", "Quality solar and storage for life beyond the grid."],
                              ["03", "Support that stays with you", "Guidance from planning through aftercare."],
                            ].map(([number, title, copy]) => (
                              <View key={number} style={[tw`flex-row items-start justify-center gap-3`, styles.aboutPoint]}>
                                <Text style={styles.aboutPointNumber}>{number}</Text>
                                <View style={{ flex: 1 }}>
                                  <Text style={styles.aboutPointTitle}>{title}</Text>
                                  <Text style={styles.aboutPointDescription}>{copy}</Text>
                                </View>
                              </View>
                            ))}
                          </View>
                        </View>
                        <View nativeID="about-team-visual" style={[tw`relative min-h-[350px] flex-1 overflow-hidden`, styles.aboutVisual]}>
                          <Image
                            nativeID="about-team-image"
                            source={{ uri: "/teamImage.jpg" }}
                            accessibilityLabel="The JODU-TECH team"
                            resizeMode="cover"
                            style={styles.aboutImage}
                          />
                          <View style={styles.aboutImageShade} />
                          <View style={styles.aboutImageBadge}>
                            <Text style={styles.aboutBadgeOverline}>ENERGY THAT WORKS FOR YOU</Text>
                            <Text style={styles.aboutBadgeTitle}>Clean power. Real peace of mind.</Text>
                          </View>
                        </View>
                      </View>
                      </Reveal>
    </>
  );
}
