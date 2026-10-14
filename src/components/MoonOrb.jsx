import { useEffect } from "react";
import { View } from "react-native";

const lagosTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  hourCycle: "h23",
});

function updateLunarAppearance(hovered = false) {
  const orb = document.getElementById("hero-moon-orb");
  if (!orb) return;

  const hour = Number(
    lagosTime.formatToParts(new Date()).find(({ type }) => type === "hour")?.value,
  );
  const isNight = hour >= 18 || hour < 6;
  const shouldShow = isNight || hovered;

  orb.dataset.phase = isNight ? "night" : "day";
  orb.dataset.visible = shouldShow ? "true" : "false";
  orb.style.setProperty("opacity", shouldShow ? "1" : "0", "important");
}

export default function MoonOrb() {
  useEffect(() => {
    const orb = document.getElementById("hero-moon-orb");
    const core = document.getElementById("hero-moon-core");
    let hovered = false;

    const resizeMoon = (size) => {
      core?.style.setProperty("width", `${size}px`, "important");
      core?.style.setProperty("height", `${size}px`, "important");
    };
    const handlePointerEnter = () => {
      hovered = true;
      updateLunarAppearance(true);
      resizeMoon(window.innerWidth <= 760 ? 56 : 80);
    };
    const handlePointerLeave = () => {
      hovered = false;
      updateLunarAppearance(false);
      core?.style.removeProperty("width");
      core?.style.removeProperty("height");
    };

    updateLunarAppearance(false);
    const interval = window.setInterval(() => updateLunarAppearance(hovered), 60_000);

    orb?.addEventListener("pointerenter", handlePointerEnter);
    orb?.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.clearInterval(interval);
      orb?.removeEventListener("pointerenter", handlePointerEnter);
      orb?.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <View
      nativeID="hero-moon-orb"
      pointerEvents="auto"
      accessibilityRole="image"
      accessibilityLabel="Full moon and orbital rings, shown at night or on hover"
    >
      <View nativeID="hero-moon-orbit-one" />
      <View nativeID="hero-moon-orbit-two" />
      <View nativeID="hero-moon-core" />
    </View>
  );
}
