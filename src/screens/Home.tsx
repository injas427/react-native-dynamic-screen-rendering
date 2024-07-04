import {Header} from '@src/components';
import React from 'react';
import {View} from 'react-native';

import {HomeMetaData} from './home/metadata';
import {ComponentRegistry} from './registry';

export const Home = () => {
  const handlers: any = {
    handler1: () => {
      console.log('Clicked 1');
    },
    handler2: () => {
      console.log('Clicked 2');
    },
  };

  const handleEvents = (eventHandlers: [] = []) => {
    let events: any = {};
    eventHandlers.forEach((handler: any) => {
      events[handler.type] = handlers[handler.value];
    });

    return events;

    //   return eventHandlers.map(handler => (
    //     {
    //     handler["type"]: handler[handler["value"]]
    //   })
    // );
  };

  const handleComponent = (component: any) => {
    const Component = ComponentRegistry[component.type];

    // if (component.hide) {
    //   return null;
    // }

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
        <Component
          {...handleEvents(component.eventHandlers)}
          {...component.props}
        />
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
