import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import Reveal from "./Reveal.jsx";
import { PROJECTS } from "../data/projects.js";

const MotionDiv = m.div;
export default function ElectricProjectsSection({ isMobile, onSelectProject }) {
  const [visibleCount, setVisibleCount] = useState(2);

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const isMaxReached = visibleCount >= PROJECTS.length;

  const handleAddCell = () => {
    if (!isMaxReached) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setVisibleCount(2);
  };

  const gateOpenPercentage = Math.min(100, ((visibleCount - 2) / (PROJECTS.length - 2)) * 100);

  return (
    <View nativeID="projects" style={tw`mx-auto w-full max-w-[1120px] px-4 py-12`}>
      {/* SECTION HEADER */}
      <Reveal>
        <View style={tw`mb-10 items-center text-center`}>
          <Text style={tw`text-[11px] font-bold tracking-[0.2em] text-[#FACC15] uppercase mb-2`}>
            OUR PROJECTS
          </Text>
          <Text style={tw`text-2xl font-extrabold text-white sm:text-4xl tracking-tight`}>
            Clean energy, <Text style={tw`text-[#FACC15]`}>made real.</Text>
          </Text>
          <Text style={tw`mt-3 max-w-2xl text-sm text-slate-400 sm:text-base leading-relaxed`}>
            From family homes to busy businesses, explore solar solutions designed for everyday power needs across Nigeria.
          </Text>
        </View>
      </Reveal>

      {/* ELECTRIC CIRCUIT BOUNDARY CONTAINER */}
      <View style={tw`relative w-full p-4 sm:p-8 overflow-hidden`}>
        
        {/* STATIC BORDER (TOP, BOTTOM, LEFT ONLY - NO RADIUS) */}
        <View style={tw`absolute inset-0 border-[1px] border-[#FACC15] pointer-events-none border-r-0`} />

        {/* SINGLE ANIMATED RIGHT BORDER (NO RADIUS) */}
        <MotionDiv
          animate={{ height: `${100 - gateOpenPercentage}%` }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          style={tw`absolute top-0 right-0 w-[1px] bg-[#FACC15] pointer-events-none z-10`}
        />

        {/* PROJECT GRID / CELL FLOW */}
        <View style={tw`flex-row flex-wrap justify-center gap-6`}>
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <MotionDiv
                key={project.id}
                initial={{ opacity: 0, x: 180, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 180, scale: 0.95 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  flex: isMobile ? undefined : "0 0 calc(50% - 12px)",
                  width: isMobile ? "100%" : undefined,
                }}
              >
                {/* BORDERLESS IMAGE & CONTENT CARD */}
                <Pressable
                  nativeID={`project-card-${project.id}`}
                  accessibilityRole="button"
                  accessibilityLabel={`${project.title}. ${project.description}`}
                  onPress={() => onSelectProject(project.slug)}
                  style={tw`group w-full`}
                >
                  <View style={tw`relative h-44 sm:h-48 w-full overflow-hidden bg-transparent border-0`}>
                    <Image
                      nativeID={`solar-photo-${project.id}`}
                      source={{ uri: project.image }}
                      resizeMode="cover"
                      style={tw`h-full w-full group-hover:scale-105 transition-transform duration-700`}
                    />

                    {/* Gradient Overlay */}
                    <View style={tw`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />

                    {/* Overlay Meta */}
                    <View style={tw`absolute bottom-3 left-3 right-3 flex-row items-center justify-between`}>
                      <View>
                        <Text style={tw`text-[9px] font-black tracking-widest text-[#FACC15]`}>
                          {project.category}
                        </Text>
                        <Text style={tw`text-[11px] font-medium text-slate-300 mt-0.5`}>
                          {project.location}
                        </Text>
                      </View>

                      <View style={tw`h-7 w-7 items-center justify-center border border-[#FACC15]`}>
                        <Text style={tw`text-xs font-bold text-[#FACC15]`}>↗</Text>
                      </View>
                    </View>
                  </View>

                  <View style={tw`mt-3 px-1`}>
                    <Text style={tw`text-base font-extrabold text-white group-hover:text-[#FACC15] transition-colors`}>
                      {project.title}
                    </Text>
                    <Text style={tw`mt-1 text-xs text-slate-400 leading-relaxed`}>
                      {project.description}
                    </Text>
                  </View>
                </Pressable>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </View>

        {/* BUTTON CONTROLS */}
        <View style={tw`mt-10 flex-row flex-wrap items-center justify-center gap-4`}>
          {!isMaxReached ? (
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Pressable
                accessibilityRole="button"
                onPress={handleAddCell}
                style={tw`flex-row items-center gap-2.5 border-[1px] border-[#FACC15] px-6 py-2.5`}
              >
                <MotionDiv
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={tw`h-2 w-2 border border-[#FACC15]`}
                />

                <Text style={tw`text-xs font-extrabold tracking-wider text-white uppercase`}>
                  ADD CELL (+1) • LOAD PROJECT
                </Text>

                <Text style={tw`text-sm text-[#FACC15]`}>⚡</Text>
              </Pressable>
            </MotionDiv>
          ) : (
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Pressable
                accessibilityRole="button"
                onPress={handleReset}
                style={tw`flex-row items-center gap-2.5 border-[1px] border-[#FACC15] px-6 py-2.5`}
              >
                <Text style={tw`text-xs font-extrabold tracking-wider text-slate-300 uppercase`}>
                  RESET CIRCUIT
                </Text>
                <Text style={tw`text-sm text-slate-400`}>🔌</Text>
              </Pressable>
            </MotionDiv>
          )}
        </View>
      </View>
    </View>
  );
}