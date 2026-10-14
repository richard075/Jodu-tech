import { Text, View } from "react-native";
import tw from "twrnc";
import Reveal from "./Reveal.jsx";

export default function TestimonialsSection({ testimonial, projectTitle }) {
  if (!testimonial) return null;

  return (
    <View nativeID="project-testimonial" style={tw`w-full py-10`}>
      <Reveal>
        <View nativeID="project-testimonial-heading">
          <Text nativeID="project-testimonial-eyebrow">CUSTOMER TESTIMONIAL</Text>
          <Text nativeID="project-testimonial-title">What our customers say</Text>
        </View>
      </Reveal>

      <Reveal delay={0.08}>
        <View nativeID="project-testimonial-card">
          <Text nativeID="project-testimonial-mark" accessibilityElementsHidden>
            “
          </Text>
          <Text nativeID="project-testimonial-quote">{testimonial}</Text>
          <View nativeID="project-testimonial-attribution">
            <View nativeID="project-testimonial-avatar" />
            <View>
              <Text nativeID="project-testimonial-name">JODU-TECH customer</Text>
              <Text nativeID="project-testimonial-label">{projectTitle}</Text>
            </View>
          </View>
        </View>
      </Reveal>
    </View>
  );
}
