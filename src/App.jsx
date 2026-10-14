import { useEffect, useRef, useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import tw from "twrnc";
import { LINK, MUTED, YELLOW } from "./constants.js";
import { styles } from "./styles.js";
import TopNavigation from "./components/TopNavigation.jsx";
import HeroSection from "./components/HeroSection.jsx";
import TrustBar from "./components/TrustBar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import CertificationRibbon from "./components/CertificationRibbon.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import ElectricBorderEffect from "./components/ElectricBorderEffect.jsx";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";
import { getProjectBySlug } from "./data/projects.js";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getProjectSlugFromPath(pathname = window.location.pathname) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function App() {
  const { width, height } = useWindowDimensions();
  const isMobile = width <= 760;
  const [projectSlug, setProjectSlug] = useState(() => getProjectSlugFromPath());
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatHovered, setChatHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");
  const pointerGridRef = useRef({ opacity: 0, lastX: null, lastY: null });
  const headlineFontSize = isMobile ? (width <= 420 ? 40 : 46) : width < 1100 ? 48 : 56;
  const scrollFadeOpacity = Math.min(1, scrollY / 280);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    const handlePopState = () => {
      setProjectSlug(getProjectSlugFromPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const selectedProject = projectSlug ? getProjectBySlug(projectSlug) : null;

  useEffect(() => {
    document.title = selectedProject
      ? `${selectedProject.title} | JODU-TECH LTD`
      : "JODU-TECH LTD | Powering Nigeria with Clean Energy";
  }, [selectedProject]);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const pointer = pointerGridRef.current;
      const { clientX: x, clientY: y } = event;
      const distance =
        pointer.lastX === null
          ? 0
          : Math.hypot(x - pointer.lastX, y - pointer.lastY);

      pointer.opacity =
        pointer.lastX === null
          ? 0.12
          : Math.min(0.42, pointer.opacity + (distance / 700) * 0.42);
      pointer.lastX = x;
      pointer.lastY = y;

      document.documentElement.style.setProperty("--pointer-x", `${x}px`);
      document.documentElement.style.setProperty("--pointer-y", `${y}px`);
      const grid = document.getElementById("scroll-grid-overlay");
      if (grid) grid.style.opacity = String(pointer.opacity);
    };

    const handleMouseLeave = () => {
      const pointer = pointerGridRef.current;
      pointer.opacity = 0;
      pointer.lastX = null;
      pointer.lastY = null;
      const grid = document.getElementById("scroll-grid-overlay");
      if (grid) grid.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    if (projectSlug) {
      window.history.pushState({}, "", "/");
      setProjectSlug(null);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => scrollToSection(id));
      });
      return;
    }
    scrollToSection(id);
  };

  const navigateToProject = (slug) => {
    setMenuOpen(false);
    window.history.pushState({ projectSlug: slug }, "", `/projects/${encodeURIComponent(slug)}`);
    setProjectSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const returnToProjects = () => {
    window.history.pushState({}, "", "/");
    setProjectSlug(null);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => scrollToSection("projects"));
    });
  };

  const submitContact = () => {
    const { name, email, message } = contactForm;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setContactStatus("Please complete all fields before continuing.");
      return;
    }

    const text = `Hello JODU-TECH LTD, I'd like to discuss a solar project.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nProject details: ${message.trim()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setContactStatus("Your message is ready in WhatsApp. Review it and press send to reach us.");
  };

  return (
    <LazyMotion features={domAnimation}>
    <MotionConfig reducedMotion="user">
    <View
      nativeID="app-root"
      style={tw`flex-1`}
    >
      <TopNavigation isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />

      <ScrollView
        nativeID="home"
        style={{ position: "relative", zIndex: 1, backgroundColor: "transparent" }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            overflow: "hidden",
            paddingHorizontal: isMobile ? 12 : "6%",
            backgroundColor: "transparent",
          }}
        >
          <View style={styles.ambientGlow} pointerEvents="none" />

          <View style={{ height: isMobile ? 80 : 104 }} />

          {projectSlug ? (
            <ProjectDetailPage
              project={selectedProject}
              onBack={returnToProjects}
              onSelectProject={navigateToProject}
              onContact={() => navigate("contact")}
            />
          ) : (
            <>
              <HeroSection isMobile={isMobile} width={width} height={height} headlineFontSize={headlineFontSize} navigate={navigate} />
              <TrustBar isMobile={isMobile} />
              <AboutSection isMobile={isMobile} />
              <ServicesSection isMobile={isMobile} navigate={navigate} />
              <ProjectsSection isMobile={isMobile} onSelectProject={navigateToProject} />
              <CertificationRibbon isMobile={isMobile} />
              <ContactSection isMobile={isMobile} contactForm={contactForm} setContactForm={setContactForm} submitContact={submitContact} contactStatus={contactStatus} />
              <SiteFooter isMobile={isMobile} navigate={navigate} />
            </>
          )}
        </View>
      </ScrollView>

      <View
        nativeID="scroll-fade-overlay"
        pointerEvents="none"
        style={[styles.scrollFade, { opacity: scrollFadeOpacity }]}
      />
      <View nativeID="scroll-grid-overlay" pointerEvents="none" style={styles.gridOverlay} />

      <Pressable
        accessibilityRole="link"
        accessibilityLabel="Chat with us on WhatsApp"
        onPress={() => window.open(LINK, "_blank", "noopener,noreferrer")}
        onHoverIn={() => setChatHovered(true)}
        onHoverOut={() => setChatHovered(false)}
        style={styles.whatsApp}
      >
        <svg width="31" height="31" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 5.5a10 10 0 0 0-8.6 15.1l-1.2 4.2 4.3-1.1A10 10 0 1 0 16 5.5Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12.6 11.3c-.2-.4-.4-.4-.7-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.2 4.9 4.3 2.4.9 2.9.7 3.4.6.5-.1 1.6-.7 1.8-1.4s.2-1.3.2-1.4-.2-.2-.5-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.2-.2.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2Z"
            fill="white"
          />
        </svg>
        <View style={[styles.whatsAppTooltip, { opacity: chatHovered ? 1 : 0 }]}>
          <Text numberOfLines={1} style={{ color: "#eff5fa", fontSize: 11, fontWeight: "700" }}>
            Chat with us
          </Text>
        </View>
      </Pressable>
      <ElectricBorderEffect />
    </View>
    </MotionConfig>
    </LazyMotion>
  );
}


export default App;
