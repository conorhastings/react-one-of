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

test('OneOf component renders correctly when only one condition is met', () => {
  const tree = renderer.create(
    <OneOf
    	components={[
    		{ Component: X, condition: true },
    		{ Component: Y, condition:false },
    		{ Component: Z, condition: false }
    	]}
    	cool="wow"
    	conor="awesome"
    	volkswagen="evil"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});