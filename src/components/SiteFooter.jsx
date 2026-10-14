import { AnimatePresence, m } from "framer-motion";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import TrustStat from "./TrustStat.jsx";

const MotionDiv = m.div;

export default function SiteFooter({ isMobile, navigate }) {
  return (
    <>
                      <Reveal style={{ width: "100%" }}>
                      <View
                        nativeID="footer"
                        style={[tw`mx-auto w-full max-w-[1120px] items-center px-0 pt-8 pb-5`, styles.footer, isMobile && tw`px-4`]}
                      >
                        <View style={[tw`w-full flex-row items-start justify-center gap-6 pb-8`, styles.footerMain, isMobile && tw`flex-col gap-8`]}>
                          <View style={[tw`flex-1 items-center`, styles.footerBrandColumn]}>
                            <Pressable
                              accessibilityRole="link"
                              accessibilityLabel="JODU-TECH LTD home"
                              onPress={() => navigate("home")}
                              style={tw`flex-row items-center`}
                            >
                              <Image
                                source={{ uri: "/JoduLogo.svg" }}
                                accessibilityLabel="JODU-TECH LTD"
                                resizeMode="contain"
                                style={[styles.brandLogo, styles.footerLogo]}
                              />
                            </Pressable>
                            <Text style={styles.footerTagline}>
                              Reliable solar energy for a brighter, more independent Nigeria.
                            </Text>
                          </View>
                          <View style={[tw`flex-1 items-center gap-6`, styles.footerInfoColumn]}>
                          <View style={[tw`items-center gap-2.5`, styles.footerLinksColumn]}>
                            <Text style={styles.footerColumnTitle}>EXPLORE</Text>
                            {[
                              ["About us", "about"],
                              ["Services", "services"],
                              ["Projects", "projects"],
                              ["Contact", "contact"],
                            ].map(([label, id]) => (
                              <Pressable key={id} accessibilityRole="link" onPress={() => navigate(id)}>
                                <Text style={styles.footerLink}>{label}</Text>
                              </Pressable>
                            ))}
                          </View>
                          <View style={[tw`items-center`, styles.footerContactColumn]}>
                            <Text style={styles.footerColumnTitle}>READY TO GET STARTED?</Text>
                            <Text style={styles.footerContactText}>Let's find the right solar setup for you.</Text>
                            <Pressable
                              accessibilityRole="link"
                              onPress={() => window.open(LINK, "_blank", "noopener,noreferrer")}
                              style={styles.footerChatButton}
                            >
                              <Text style={styles.footerChatText}>Chat with our team</Text>
                              <Text style={{ color: YELLOW, fontSize: 15 }}>↗</Text>
                            </Pressable>
                          </View>
                          </View>
                        </View>
                        <View style={[tw`w-full flex-row flex-wrap items-center justify-center gap-2.5 pt-3`, styles.footerBottom, isMobile && tw`flex-col`]}>
                          <Text style={styles.footerCopyright}>© 2026 JODU-TECH LTD. All rights reserved.</Text>
                          <Text style={styles.footerCertification}>Licensed &amp; Certified Solar Installer</Text>
                        </View>
                      </View>
                      </Reveal>
    </>
  );
}
