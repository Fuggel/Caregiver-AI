import { View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/components/inputStyles";

const Input = ({ placeholder, onChange, value, onSubmit }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={styles.input}
      />
      <TouchableOpacity onPress={onSubmit}>
        <AntDesign name="rightcircle" size={36} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
