import { AnimatePresence, m } from "framer-motion";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import { LINK, YELLOW } from "../constants.js";
import { styles } from "../styles.js";
import Reveal from "./Reveal.jsx";
import TrustStat from "./TrustStat.jsx";

const MotionDiv = m.div;

export default function ContactSection({ isMobile, contactForm, setContactForm, submitContact, contactStatus }) {
  return (
    <>
                      <Reveal style={{ width: "100%" }}>
                      <View
                        nativeID="contact"
                        style={[
                          tw`mx-auto w-full max-w-[1120px] flex-row items-center justify-center gap-9 py-16`,
                          styles.contactSection,
                          isMobile && tw`flex-col`,
                        ]}
                      >
                        <Reveal style={{ flex: 1 }}>
                        <View style={[tw`flex-1`, styles.contactCopy]}>
                          <Text style={[styles.solutionsEyebrow, { textAlign: "left" }]}>LET'S TALK SOLAR</Text>
                          <Text style={[styles.contactTitle, { textAlign: "left" }]}>Tell us what you need power for.</Text>
                          <Text style={styles.contactDescription}>
                            Share a few details about your home or business. We'll help you find a practical
                            solar solution and take the next step together.
                          </Text>
                          <View style={[styles.contactAssurance, { justifyContent: "flex-start" }]}>
                            <View style={styles.contactAssuranceDot} />
                            <Text style={styles.contactAssuranceText}>No pressure. Just helpful guidance.</Text>
                          </View>
                        </View>
                        </Reveal>
                        <Reveal style={{ flex: 0.9 }} delay={0.1}>
                        <View style={[tw`w-full max-w-[500px]`, styles.contactCard]}>
                          <Text style={styles.contactFormTitle}>Request a consultation</Text>
                          <Text style={styles.contactFormHint}>Fill in the details and continue securely in WhatsApp.</Text>
                          <TextInput
                            accessibilityLabel="Your name"
                            value={contactForm.name}
                            onChangeText={(name) => setContactForm((form) => ({ ...form, name }))}
                            placeholder="Your name"
                            placeholderTextColor="#8292a7"
                            style={styles.contactInput}
                            returnKeyType="next"
                          />
                          <TextInput
                            accessibilityLabel="Email address"
                            value={contactForm.email}
                            onChangeText={(email) => setContactForm((form) => ({ ...form, email }))}
                            placeholder="Email address"
                            placeholderTextColor="#8292a7"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.contactInput}
                            returnKeyType="next"
                          />
                          <TextInput
                            accessibilityLabel="Tell us about your project"
                            value={contactForm.message}
                            onChangeText={(message) => setContactForm((form) => ({ ...form, message }))}
                            placeholder="Tell us about your project"
                            placeholderTextColor="#8292a7"
                            multiline
                            textAlignVertical="top"
                            style={[styles.contactInput, styles.contactMessageInput]}
                          />
                          <MotionDiv whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                          <Pressable
                            accessibilityRole="button"
                            onPress={submitContact}
                            style={styles.contactSubmit}
                          >
                            <Text style={styles.contactSubmitText}>Continue to WhatsApp</Text>
                            <Text style={{ color: "#facc15", fontSize: 16, fontWeight: "700" }}>→</Text>
                          </Pressable>
                          </MotionDiv>
                          <AnimatePresence mode="wait">
                            {!!contactStatus && (
                              <MotionDiv
                                key={contactStatus}
                                initial={{ opacity: 0, height: 0, y: 6 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Text accessibilityRole="alert" style={styles.contactStatus}>{contactStatus}</Text>
                              </MotionDiv>
                            )}
                          </AnimatePresence>
                        </View>
                        </Reveal>
                      </View>
                      </Reveal>
    </>
  );
}
