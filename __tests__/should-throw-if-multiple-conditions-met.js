import React from 'react';
import renderer from 'react-test-renderer';
import OneOf from "../src/index.js";

function X() {
	return "x";
}

function Y() {
	return "y";
}

function Z() {
	return "z";
}

test('OneOf should throw if multiple conditions are met', () => {

  expect(() => {
    const tree = renderer.create(
      <OneOf
        components={[
          { Component: X, condition: true },
          { Component: Y, condition:true },
          { Component: Z, condition: false }
        ]}
        cool="wow"
        conor="awesome"
        volkswagen="evil"
      />
    ).toJSON();
  }).toThrow();
});