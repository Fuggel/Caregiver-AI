import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/components/navigationItemStyles";

const NavigationItem = ({ icon, onPress, title }) => (
  <View style={styles.navigationContainer}>
    <TouchableOpacity style={styles.navigation} onPress={onPress}>
      {icon}
      <Text style={styles.navigationTitle}>{title}</Text>
      <AntDesign name="rightcircle" size={36} color="#252525" />
    </TouchableOpacity>
  </View>
);

export default NavigationItem;
