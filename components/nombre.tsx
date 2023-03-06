import React, { useContext } from 'react';
import { Text } from 'react-native';
import { EmpleadoContext } from '../EmpleadoContext';

export default function Nombre() {
  const empleado = useContext(EmpleadoContext);
  return (
    <Text>{empleado.nombre}</Text>
  );
}
