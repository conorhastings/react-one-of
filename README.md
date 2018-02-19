## React One Of

[![CircleCI](https://circleci.com/gh/conorhastings/react-one-of.svg?style=svg)](https://circleci.com/gh/conorhastings/react-one-of)
[![codecov](https://codecov.io/gh/conorhastings/react-one-of/branch/master/graph/badge.svg)](https://codecov.io/gh/conorhastings/react-one-of)

Often times you find yourself with components with messy if else statements assigning an outside let with the final render.  This can be hard to grok, and reduces the chance ofe rros being caughtr from multiple conditions being met when only one should be. This component aims to take in a set of components and make sure only one is rendered. 

### Install

```bash
npm install react-one-of --save
```

### Props

**components** - an array of objects with the components to potentially be rendered and the condition to be met that would cause said component to be rendered
**rest** - all other props will be passed through to the rendered components

### Example

```jsx
import OneOf from 'react-one-of';
import X from './x';
import Y from './y';
import Z from './z';

function Comp() {
	return (
		<OneOf
			components={[
				{ Component: X, condition: props.showX },
				{ Component: Y, condition: props.showY },
				{ Component: Z, condition: props.showZ }
			]}
			cool="wow"
			conor="awesome"
			volkswagen="evil"
		/>
	);
}
```

### License

MIT
