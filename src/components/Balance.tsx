import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Balance = ({
  amount = '0',
  title = '',
}: {
  amount: string | undefined;
  title: string;
}) => {
  return (
    <View style={style.balanceOuter}>
      <View style={style.balanceInner}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.balance}>$ {parseFloat(amount).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  balanceOuter: {
    backgroundColor: '#9ab1f5',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceInner: {
    backgroundColor: '#f2f5c4',
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 13,
    color: '#000000',
  },
});
