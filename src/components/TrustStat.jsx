import { Text, View } from "react-native";
import tw from "twrnc";
import { styles } from "../styles.js";

export default function TrustStat({ icon, value, label, color, mobile }) {
  return (
    <View
      style={[
        tw`flex-row items-center`,
        styles.trustStat,
        {
          flexBasis: 0,
          flexGrow: 1,
          flexShrink: 1,
          minWidth: 0,
          alignItems: "center",
          borderLeftWidth: 0,
          ...(mobile ? { flexDirection: "column", gap: 5, paddingHorizontal: 4 } : {}),
        },
      ]}
    >
      <View style={styles.statIcon}>
        <Text style={{ color, fontSize: 19, fontWeight: "700" }}>{icon}</Text>
      </View>
      <View style={{ alignItems: mobile ? "center" : "flex-start" }}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );
}
