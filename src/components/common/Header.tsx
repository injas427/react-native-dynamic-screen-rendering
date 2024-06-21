import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Header = ({
  title = '',
  canGoBack = false,
  rightTitle = '',
  rightHandler = () => {},
}: {
  title: string | undefined;
  canGoBack?: boolean;
  rightTitle?: string;
  rightHandler?: () => void;
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={style.headerContainer}>
      <View>
        {canGoBack && (
          <TouchableOpacity onPress={handleBack}>
            <Text style={style.backButton}>{'<'}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={style.titleContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
      <View>
        {rightTitle && (
          <View style={style.rightSectionContainer}>
            <TouchableOpacity onPress={rightHandler}>
              <Text>{rightTitle}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
  },
  backButton: {
    fontSize: 25,
    color: '#000000',
  },
  rightSectionContainer: {
    paddingHorizontal: 5,
  },
});
