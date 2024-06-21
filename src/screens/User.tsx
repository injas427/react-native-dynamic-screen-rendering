import {Balance, Header, RecentTransactions} from '@src/components';
import {SCREEN_NAMES, USERS} from '@src/constants';
import dayjs from 'dayjs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const User = ({route, navigation}) => {
  const {user_id} = route.params;

  const selectedUser = USERS.find(user => user.id === user_id);

  const rightHandler = () => {
    navigation.navigate(SCREEN_NAMES.ADD_AMOUNT, {
      user_id,
    });
  };

  return (
    <View style={style.container}>
      <Header
        canGoBack
        title={selectedUser?.first_name}
        rightTitle="Add"
        rightHandler={rightHandler}
      />
      <View style={style.dateContainer}>
        <Text style={style.date}>{dayjs().format('DD MMM YYYY hh:mm a')}</Text>
      </View>
      <View style={style.balanceContainer}>
        <Balance amount={selectedUser?.balance} title="Balance" />
        <Balance
          amount={selectedUser?.last_transaction_amount}
          title="Last Transaction"
        />
      </View>

      <RecentTransactions transactions={selectedUser.recent_transactions} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  balanceContainer: {
    alignItems: 'center',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dateContainer: {
    alignItems: 'flex-end',
    margin: 10,
  },
  date: {
    fontSize: 13,
    color: 'black',
  },
  addAmountContainer: {},
});
