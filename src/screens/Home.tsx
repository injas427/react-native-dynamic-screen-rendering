import {Header} from '@src/components';
import React from 'react';
import {View} from 'react-native';

import {HomeMetaData} from './home/metadata';
import {ComponentRegistry} from './registry';

export const Home = () => {
  const handleComponent = (component: any) => {
    const Component = ComponentRegistry[component.type];

    if (component.props?.children && Array.isArray(component.props.children)) {
      return (
        <React.Fragment key={Math.random().toString()}>
          <Component {...component.props}>
            {component.props.children.map(c => handleComponent(c))}
          </Component>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={Math.random().toString()}>
        <Component {...component.props} />
      </React.Fragment>
    );
  };

  return (
    <View>
      <Header title="Home" />
      {HomeMetaData.screens.Home.map(handleComponent)}
    </View>
  );
};
