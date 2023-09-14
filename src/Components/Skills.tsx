import { FlatList, Text } from "react-native";
import Section from "./Section";
import styles from "../../styles";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "BoltJS",
    "MongoDB",
    "SQL",
    "Git",
    "Trello",
    "Insomia",
    "VS Code"];

  return (
    <Section title="Skills & Tools">
      <FlatList data={skills}
        numColumns={4}
        renderItem={({ item }) =>
          <Text style={styles.tags}>
            {item}
          </Text>
        }
      />
    </Section>
  );
}