import dayjs from 'dayjs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const RecentTransactions = ({transactions = []}) => {
  return (
    <View>
      <View style={style.titleContainer}>
        <Text style={style.title}>Recent Transactions</Text>
      </View>

      {transactions.map(transaction => {
        return (
          <View key={transaction.id} style={style.transactionContainer}>
            <Text style={style.name}>{transaction.sender}</Text>
            <Text style={style.amount}>
              $ {parseFloat(transaction.amount).toFixed(2)}
            </Text>
            <Text style={style.date}>
              {dayjs().subtract(1, 'h').format('DD, MMM hh:ss a')}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontWeight: '500',
    color: '#000000',
    fontSize: 16,
  },
  transactionContainer: {
    flexDirection: 'row',
    borderBlockColor: '#00000020',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    padding: 10,
    alignItems: 'center',
  },
  name: {
    flex: 2,
    fontSize: 13,
    color: '#3d3d3b',
  },
  amount: {
    flex: 1,
    fontSize: 13,
    color: '#3d3d3b',
  },
  date: {
    flex: 2,
    fontSize: 13,
    color: '#3d3d3b',
    textAlign: 'right',
  },
});
