import { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { PROJECTS } from "../data/projects.js";
import TestimonialsSection from "./TestimonialsSection.jsx";

export default function ProjectDetailPage({ project, onBack, onSelectProject, onContact }) {
  useEffect(() => {
    const gallery = document.getElementById("project-detail-media-scroll");
    if (!gallery) return undefined;

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
      const nextScrollLeft = gallery.scrollLeft + event.deltaY;
      const canScroll = event.deltaY < 0 ? gallery.scrollLeft > 0 : gallery.scrollLeft < maxScrollLeft;
      if (!canScroll) return;

      event.preventDefault();
      gallery.scrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));
    };

    gallery.addEventListener("wheel", handleWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", handleWheel);
  }, [project?.slug]);

  if (!project) {
    return (
      <View nativeID="project-not-found">
        <Text style={{ color: "#f7f9fc", fontSize: 24, fontWeight: "700" }}>Project not found</Text>
        <Text style={{ color: "#aab8c9", marginTop: 12 }}>
          This project may have moved or the address may be incorrect.
        </Text>
        <Pressable accessibilityRole="link" onPress={onBack} style={tw`mt-6`}>
          <Text style={{ color: "#facc15", fontWeight: "700" }}>← Back to projects</Text>
        </Pressable>
      </View>
    );
  }

  const otherProjects = PROJECTS.filter((item) => item.slug !== project.slug);
  const media = project.media ?? [];

  return (
    <View nativeID="project-detail">
      <Pressable
        accessibilityRole="link"
        onPress={onBack}
        style={tw`mb-5 self-start`}
      >
        <Text style={{ color: "#facc15", fontSize: 12, fontWeight: "700" }}>← All projects</Text>
      </Pressable>

      <View nativeID="project-detail-hero">
        <Image
          nativeID="project-detail-image"
          source={{ uri: project.image }}
          accessibilityLabel={`${project.category} project`}
          resizeMode="cover"
          style={tw`absolute inset-0 h-full w-full`}
        />
        <View nativeID="project-detail-shade" />
        <View nativeID="project-detail-title">
          <Text style={{ color: "#facc15", fontSize: 11, fontWeight: "700", letterSpacing: 2 }}>
            {project.category}
          </Text>
          <Text nativeID="project-detail-heading" accessibilityRole="header">
            {project.title}
          </Text>
          <Text style={{ color: "#e1eaf3", fontSize: 13, marginTop: 10 }}>
            {project.location}
          </Text>
        </View>
      </View>

      <View nativeID="project-detail-body">
        <View nativeID="project-detail-copy">
          <Text style={{ color: "#34d399", fontSize: 10, fontWeight: "700", letterSpacing: 1.5 }}>
            PROJECT OVERVIEW
          </Text>
          <Text style={{ color: "#f7f9fc", fontSize: 22, fontWeight: "700", marginTop: 12 }}>
            Energy designed around real needs.
          </Text>
          <Text style={{ color: "#aab8c9", fontSize: 14, lineHeight: 24, marginTop: 14 }}>
            {project.overview}
          </Text>
        </View>

        <View nativeID="project-detail-highlights">
          <Text style={{ color: "#f7f9fc", fontSize: 14, fontWeight: "700", marginBottom: 16 }}>
            PROJECT HIGHLIGHTS
          </Text>
          {project.highlights.map((highlight) => (
            <View key={highlight} style={tw`mb-4 flex-row items-start`}>
              <Text style={{ color: "#facc15", fontSize: 15, marginRight: 10 }}>✦</Text>
              <Text style={{ color: "#c4d0de", flex: 1, fontSize: 12, lineHeight: 20 }}>
                {highlight}
              </Text>
            </View>
          ))}
          <Pressable
            accessibilityRole="link"
            onPress={onContact}
            style={tw`mt-4 self-start border border-[#FACC15] px-5 py-3`}
          >
            <Text style={{ color: "#facc15", fontSize: 11, fontWeight: "700" }}>
              DISCUSS A SIMILAR PROJECT →
            </Text>
          </Pressable>
        </View>
      </View>

      <View nativeID="project-detail-gallery">
        <View nativeID="project-detail-gallery-heading">
          <View>
            <Text
              nativeID="project-detail-gallery-eyebrow"
              style={{ color: "#34d399", fontSize: 10, fontWeight: "700", letterSpacing: 1.5 }}
            >
              PROJECT GALLERY
            </Text>
            <Text
              nativeID="project-detail-gallery-title"
              style={{ color: "#f7f9fc", fontSize: 22, fontWeight: "700", marginTop: 12 }}
            >
              Images &amp; videos
            </Text>
          </View>
          {!!media.length && (
            <Text nativeID="project-detail-gallery-count" style={{ color: "#aab8c9", fontSize: 12 }}>
              {media.length} {media.length === 1 ? "item" : "items"}
            </Text>
          )}
        </View>
        {media.length ? (
          <View nativeID="project-detail-media-scroll">
            {media.map((item, index) => (
              <View
                key={`${item.type}-${item.src}`}
                nativeID={`project-detail-media-item-${index}`}
              >
                {item.type === "video" ? (
                  <video
                    id={`project-detail-media-video-${index}`}
                    controls
                    preload="metadata"
                    poster={item.poster}
                    aria-label={item.alt || `${project.title} video ${index + 1}`}
                  >
                    <source src={item.src} type={item.mimeType || "video/mp4"} />
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <Image
                    nativeID={`project-detail-media-image-${index}`}
                    source={{ uri: item.src }}
                    accessibilityLabel={item.alt || `${project.title} photo ${index + 1}`}
                    resizeMode="cover"
                    style={{ width: "100%", aspectRatio: 4 / 3 }}
                  />
                )}
                {item.caption && (
                  <Text nativeID={`project-detail-media-caption-${index}`}>{item.caption}</Text>
                )}
              </View>
            ))}
          </View>
        ) : (
          <View nativeID="project-detail-media-empty">
            <Text style={{ color: "#c4d0de", fontSize: 13, fontWeight: "700" }}>
              Project photos and videos coming soon
            </Text>
            <Text style={{ color: "#8fa1b6", fontSize: 12, lineHeight: 19, marginTop: 8 }}>
              Add image or video entries to this project&apos;s media list to showcase the installation.
            </Text>
          </View>
        )}
      </View>

      <TestimonialsSection testimonial={project.testimonial} projectTitle={project.title} />

      <View nativeID="project-detail-more">
        <Text style={{ color: "#f7f9fc", fontSize: 19, fontWeight: "700", marginBottom: 18 }}>
          Explore more projects
        </Text>
        <View nativeID="project-detail-related">
          {otherProjects.map((item) => (
            <Pressable
              key={item.slug}
              accessibilityRole="link"
              onPress={() => onSelectProject(item.slug)}
              style={tw`border border-[#334155] p-4`}
            >
              <Text style={{ color: "#34d399", fontSize: 9, fontWeight: "700", letterSpacing: 1 }}>
                {item.category}
              </Text>
              <Text style={{ color: "#f7f9fc", fontSize: 13, fontWeight: "700", marginTop: 8 }}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
