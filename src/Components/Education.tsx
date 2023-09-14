import { FlatList, Text, View } from "react-native"
import Section from "./Section"
import { education } from '../../data/education.json';
import styles from "../../styles";

export default function Education() {
  return (
    <Section title="Education" >
      <FlatList
        data={education}
        renderItem={({ item }) =>
          <View style={styles.educationItem}>
            <Text style={{ fontSize: 20 }}>
              {item.studyType + "\n"}
            </Text>

            <Text style={{ fontSize: 18 }}>
              {item.description + "\n"}
            </Text>

            <Text style={{ fontSize: 18 }}>
              {item.institution + "\n"}
            </Text>

            <Text>
              {item.startDate + " - " + item.endDate + "\n"}
            </Text>
          </View>
        }
      />
    </Section>
  );
}