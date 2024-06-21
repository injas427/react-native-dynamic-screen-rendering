import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    justifyContent: 'space-between',
  },
  card2: {
    backgroundColor: 'green',
  },
});

export const HomeMetaData = {
  screens: {
    Home: [
      {
        type: 'Card',
        props: {
          style: styles.card,
          children: [
            {
              type: 'Typography',
              props: {
                children: 'Typography',
              },
            },
            {
              type: 'TextInput',
              props: {
                style: styles.textInput,
                value: 'Hi 2',
              },
            },
            {
              type: 'Typography',
              props: {
                children: 'Typography',
              },
            },
            {
              type: 'Card',
              props: {
                style: styles.card,
                children: [
                  {
                    type: 'Typography',
                    props: {
                      children: 'Nested',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
