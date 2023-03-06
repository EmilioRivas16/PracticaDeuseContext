import { StyleSheet, Text, View, Image } from 'react-native';
import { EmpleadoContext } from './EmpleadoContext';
import Nombre from './components/nombre';
import Puesto from './components/puesto';
import Titulo from './components/titulo';

const empleado = {
  nombre: 'Michael Jordan',
  puesto: 'Desarrollador web',
  titulo: 'Ingeniero en software'
};

export default function App() {
  return (
    <EmpleadoContext.Provider value={empleado}>
      <View style={styles.container}>
        <Image source={require('./profileimage.png')} style={styles.image}></Image>
        <Text><Text style={styles.description}>Nombre:</Text>  <Nombre />  </Text>
        <Text>{'\n'}</Text>
        <Text><Text style={styles.description}>Nombre:</Text>  <Puesto />  </Text>
        <Text>{'\n'}</Text>
        <Text><Text style={styles.description}>Nombre:</Text>  <Titulo />  </Text>
      </View>
    </EmpleadoContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3BA9B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 45,
    marginTop: 250,
    marginBottom: 250,
    width: 300,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: -30,
    marginBottom: 20,
  },
  description: {
    fontWeight: 'bold'
  }
});