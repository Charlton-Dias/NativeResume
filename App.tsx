import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  FlatList,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/FontAwesome';

import { education } from './data/education.json';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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

  const data = [
    {
      slink: 'linkedin.com/in/charlton-dias',
      link: 'www.linkedin.com/in/charlton-dias',
      icon: 'linkedin',
    },
    {
      slink: 'github.com/Charlton-Dias',
      link: 'www.github.com/Charlton-Dias',
      icon: 'github',
    },
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Text style={styles.title}>
            Charlton Dias
          </Text>

          <Section title="About me" >
            <Text style={{ fontSize: 20 }}>
              {"Software Developer \n\n"}
            </Text>
            <Text >
              {"I am a software developer with a passion for learning new technologies and building software that solves real world problems. I am a team player and I enjoy working with others to achieve a common goal. I am a quick learner and I am always looking for ways to improve my skills. \n\n"}
            </Text>

            <FlatList
              data={data}
              renderItem={({ item }) =>
                <View>
                  <Text  style={{ color: 'orange', fontSize:18 }} onPress={() => Linking.openURL('https://' + item.link)}>
                    {/* <Icon name={item.icon} size={20} color="orange" /> */}
                    {' ' + item.slink + '\n'}
                  </Text>
                </View>
              }
              // keyExtractor={item => item.id}
            />
          </Section>

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    padding: 24,
    backgroundColor: '#202020',
    borderRadius: 10,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  educationItem: {
    width: '90%',
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#303030',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#353535',
  },
  section: {
    width: '95%',
    padding: 2,
    borderWidth: 1,
    backgroundColor: '#555555',
    borderRadius: 8,
  },
  tags: {
    fontSize: 18,
    padding: 8,
    margin: 4,
    backgroundColor: '#C2A515',
    borderRadius: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 46,
    textAlign: 'center',
    marginTop: 20,
    color: '#F2C515',
  }
});



export default App;
