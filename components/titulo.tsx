import React, { useContext } from 'react';
import { Text } from 'react-native';
import { EmpleadoContext } from '../EmpleadoContext';

export default function Titulo() {
  const empleado = useContext(EmpleadoContext);
  return (
    <Text>{empleado.titulo}</Text>
  );
}