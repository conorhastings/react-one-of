import React from 'react';

export default function OneOf({ components = [], ...rest }) {
  const componentsMeetingCondition = components.filter(({ condition }) => condition);
  if (componentsMeetingCondition.length > 1) {
    throw new Error('only one component can meet conditions to be rendered');
  } else if (!componentsMeetingCondition.length) {
    throw new Error('at least one component must meet condition');
  }
  const { Component } = componentsMeetingCondition[0];
  return <Component {...rest} />
}
