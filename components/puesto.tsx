import React, { useContext } from 'react';
import { Text } from 'react-native';
import { EmpleadoContext } from '../EmpleadoContext';

export default function Puesto() {
  const empleado = useContext(EmpleadoContext);
  return (
    <Text>{empleado.puesto}</Text>
  );
}