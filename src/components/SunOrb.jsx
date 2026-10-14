import { useEffect } from "react";
import { View } from "react-native";

const lagosTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function updateSolarAppearance(hovered = false) {
  const orb = document.getElementById("hero-sun-orb");
  if (!orb) return;

  const timeParts = lagosTime.formatToParts(new Date());
  const hour = Number(timeParts.find(({ type }) => type === "hour")?.value);
  const minute = Number(timeParts.find(({ type }) => type === "minute")?.value);
  const minutesAfterMidnight = hour * 60 + minute;
  const sunrise = 6 * 60;
  const sunset = 18 * 60;
  const daylightProgress = Math.max(
    0,
    Math.min(1, (minutesAfterMidnight - sunrise) / (sunset - sunrise)),
  );
  const sunHeight = Math.sin(daylightProgress * Math.PI);

  let phase = "night";
  if (minutesAfterMidnight >= 6 * 60 && minutesAfterMidnight < 8 * 60) phase = "dawn";
  else if (minutesAfterMidnight >= 8 * 60 && minutesAfterMidnight < 16 * 60) phase = "day";
  else if (minutesAfterMidnight >= 16 * 60 && minutesAfterMidnight < 18 * 60) phase = "dusk";

  const isNight = phase === "night";
  const shouldShow = !(isNight && !hovered);

  orb.dataset.phase = phase;
  orb.dataset.visible = shouldShow ? "true" : "false";
  orb.style.setProperty("opacity", shouldShow ? "1" : "0", "important");
  orb.style.setProperty("--sun-y", `${Math.round(16 - sunHeight * 32)}px`);
}

export default function SunOrb() {
  useEffect(() => {
    const orb = document.getElementById("hero-sun-orb");
    const core = document.getElementById("hero-sun-core");
    let hovered = false;

    const resizeSun = (size) => {
      core?.style.setProperty("width", `${size}px`, "important");
      core?.style.setProperty("height", `${size}px`, "important");
    };
    const handlePointerEnter = () => {
      hovered = true;
      updateSolarAppearance(true);
      resizeSun(window.innerWidth <= 760 ? 56 : 80);
    };
    const handlePointerLeave = () => {
      hovered = false;
      updateSolarAppearance(false);
      core?.style.removeProperty("width");
      core?.style.removeProperty("height");
    };

    updateSolarAppearance(false);
    const interval = window.setInterval(() => updateSolarAppearance(hovered), 60_000);

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
      nativeID="hero-sun-orb"
      pointerEvents="auto"
      accessibilityRole="image"
      accessibilityLabel="Decorative sun showing the current time of day in Nigeria"
    >
      <View nativeID="hero-sun-orbit-one" />
      <View nativeID="hero-sun-orbit-two" />
      <View nativeID="hero-sun-core" />
    </View>
  );
}
