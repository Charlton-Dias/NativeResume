import React from 'react';
import {
  SafeAreaView,
  Button,
  ScrollView,
  StatusBar,
  Text,
  Image,
  useColorScheme,
  View,
  Linking,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Section from './src/Components/Section';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Education from './src/Components/Education';
import Skills from './src/Components/Skills';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


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

  const [name, setName] = React.useState('Charlton Dias');
  const [show, setShow] = React.useState(false);

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

          <Image source={require('./src/avatar.jpeg')} style={styles.image} />

          <Text style={styles.title}>
            {name}
          </Text>

          <TouchableOpacity style={styles.buttons}>
            <Button
              title='Toggle Full Name'
              onPress={() => name == 'Charlton Dias' ?
                setName("Charlton Julius Dias")
                : setName("Charlton Dias")}
            />
          </TouchableOpacity>

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
                  <Text style={{ color: 'orange', fontSize: 18 }} onPress={() => Linking.openURL('https://' + item.link)}>
                    {/* <Icon name={item.icon} size={20} color="orange" /> */}
                    {' ' + item.slink + '\n'}
                  </Text>
                </View>
              }
            // keyExtractor={item => item.id}
            />
          </Section>
          
          <TouchableOpacity style={styles.buttons}>
            <Button
              title={show ? 'Hide Skills & Education' : 'Show Skills & Education'}
              onPress={() => show ?
                setShow(false)
                : setShow(true)
              }
            />
          </TouchableOpacity>

          {show ?
            <>
              <Skills />
              <Education />
            </>
            :
            <></>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}




export default App;
