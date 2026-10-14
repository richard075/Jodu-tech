import { AnimatePresence, m } from "framer-motion";
import { Text, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import TrustStat from "./TrustStat.jsx";

const MotionDiv = m.div;

export default function ServicesSection() {
  return (
    <>
                      <View
                        nativeID="services"
                        style={[tw`mx-auto w-full max-w-[1120px] items-center px-0 pt-9 pb-16`, styles.solutionsSection]}
                      >
                        <Reveal>
                        <View style={[tw`self-stretch flex-col items-center justify-center gap-7 text-center`, styles.servicesHeading]}>
                          <View>
                            <Text style={styles.solutionsEyebrow}>SOLAR SERVICES</Text>
                            <Text style={styles.solutionsTitle}>Everything you need to switch on.</Text>
                          </View>
                          <Text style={[styles.solutionsDescription, styles.servicesIntro]}>
                            One trusted team to plan, install, and support your solar journey.
                          </Text>
                        </View>
                        </Reveal>
                        <View
                          nativeID="services-grid"
                          style={[styles.solutionsGrid, { width: "100%" }]}
                        >
                          {[
                            ["01", "Solar system design", "A right-sized system, tailored to your energy needs and budget.", "⌂", "#facc15"],
                            ["02", "Professional installation", "Expert setup for homes, offices, and commercial spaces.", "↗", "#34d399"],
                            ["03", "Battery & backup", "Store solar power and keep essential appliances running.", "◷", "#77b9ff"],
                            ["04", "Maintenance & support", "Ongoing checks and practical help to keep your system performing.", "✦", "#facc15"],
                          ].map(([number, title, copy, icon, color]) => (
                            <Reveal
                              key={number}
                              delay={Number(number - 1) * 0.08}
                              style={{
                                flex: "none",
                                width: "100%",
                                minWidth: 0,
                              }}
                            >
                            <View
                              nativeID={`solution-${number}`}
                              style={[styles.solutionCard, { width: "100%" }]}
                            >
                              <View style={[styles.solutionIcon, { alignSelf: "center" }]}>
                                <Text style={{ color, fontSize: 21 }}>{icon}</Text>
                              </View>
                              <Text style={styles.solutionNumber}>{number} / SOLUTIONS</Text>
                              <Text style={styles.solutionTitle}>{title}</Text>
                              <Text style={styles.solutionDescription}>{copy}</Text>
                            </View>
                            </Reveal>
                          ))}
                        </View>
                      </View>
    </>
  );
}
