import { AnimatePresence, m } from "framer-motion";
import { styles } from "../styles.js";
import { NAV_LINKS } from "../constants.js";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";

const MotionDiv = m.div;

export default function TopNavigation({ isMobile, menuOpen, setMenuOpen, navigate }) {
  return (
          <MotionDiv
              id="site-header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.2, 0.75, 0.25, 1] }}
              style={{
                position: "fixed",
                zIndex: 20,
                top: 22,
                left: isMobile ? "3%" : "6%",
                width: isMobile ? "94%" : "88%",
              }}
            >
          <View
              style={[
                tw`flex-row items-center justify-between`,
                styles.header,
                { marginTop: 0 },
                isMobile && { minHeight: 66, paddingHorizontal: 14 },
              ]}
            >
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
                style={styles.brandLogo}
              />
            </Pressable>
    
            {isMobile ? (
              <View style={tw`flex-row items-center`}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={menuOpen ? "Close navigation" : "Open navigation"}
                  accessibilityState={{ expanded: menuOpen }}
                  onPress={() => setMenuOpen((open) => !open)}
                  style={styles.menuButton}
                >
                  <Text style={{ color: "#eff4fa", fontSize: 20, lineHeight: 24 }}>
                    {menuOpen ? "×" : "☰"}
                  </Text>
                </Pressable>
                <Pressable
                  accessibilityRole="link"
                  onPress={() => navigate("contact")}
                  style={[styles.headerCta, { minHeight: 39, marginLeft: 9, paddingHorizontal: 12 }]}
                >
                  <Text style={styles.headerCtaText}>Get Quote  →</Text>
                </Pressable>
              </View>
            ) : (
              <>
                <View style={[tw`flex-row items-center`, { gap: 22 }]}>
                  {NAV_LINKS.map(([label, id], index) => (
                    <Pressable
                      key={id}
                      accessibilityRole="link"
                      onPress={() => navigate(id)}
                      style={index === 0 ? styles.activeNavLink : null}
                    >
                      <Text style={[styles.navLink, index === 0 && { color: "#f7f9fc" }]}>{label}</Text>
                    </Pressable>
                  ))}
                </View>
                <Pressable
                  accessibilityRole="link"
                  onPress={() => navigate("contact")}
                  style={styles.headerCta}
                >
                  <Text style={styles.headerCtaText}>Get Quote  →</Text>
                </Pressable>
              </>
            )}
    
            <AnimatePresence>
              {isMobile && menuOpen && (
                <MotionDiv
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  style={{ position: "absolute", top: 76, right: 0, left: 0, zIndex: 21 }}
                >
                  <View style={[styles.mobileMenu, { position: "relative", top: 0, right: 0, left: 0 }]}>
                    {NAV_LINKS.map(([label, id]) => (
                      <Pressable
                        key={id}
                        accessibilityRole="link"
                        onPress={() => navigate(id)}
                        style={styles.mobileMenuItem}
                      >
                        <Text style={styles.mobileMenuText}>{label}</Text>
                      </Pressable>
                    ))}
                  </View>
                </MotionDiv>
              )}
            </AnimatePresence>
          </View>
          </MotionDiv>
  );
}
