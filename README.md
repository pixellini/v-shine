# v-shine-effect
A Vue directive that creates a shine effect on any element.

## Installation
```
npm i v-shine-effect
```

Registering the directive in Vue:
```javascript
// Global Instance - in your main.js file
import shine from 'v-shine-effect';

Vue.use(shine);
```
```javascript
// Single Instance
import shine from 'v-shine-effect';

new Vue({
  directives: { shine }
})
```

## Options

|  Property |  Description | Type  | Default  |
|-----------|--------------|-------|----------|
| event  | The event the animation will react to on the element.  | String  | 'mouseenter'  |
| time  | The number of seconds for the shine to complete its animation.  | Number  | 1.5  |
|  ease |  The easing function of the shine. | String  |  'ease' |
| color  |  The color of the shine. | String  |  '#fff' |
| angle  |  The angle of the shine. This will default to the diagonal length of the element. | Number  |   |
| blur  |  The amount of blur applied on the shine element. | Number  |  8 |
| delay  |  Number of seconds before the shine animation starts. | Number  |  0 |
| opacity  |  The opacity of the shine. | Number (0 - 1)  |  0.4 |
| shineWidth  |  The thickness of the shine bar. This will default to a quarter of the main element's size. | Number  |   |
| fromLeft  |  Determines if the shine will swipe from the left or from the right. | Boolean  |  true |
| extraShine  |  Adds a trailing shine to add more effect. | Boolean  |  false |

## Usage
Shine can be applied onto an element by using "v-shine".

#### Basic usage example:

```html
<div v-shine></div>
```

## Examples
```html
<div v-shine="{ time: 1.2, ease: 'ease-in', color: '#ff0000', opacity: 0.5, fromLeft: false, extraShine: true }"></div>
```

```html
<button v-shine="{ time: 0.3, ease: 'linear', blur: 10, delay: 1 }"></button>
```
## Demo
https://codepen.io/jacobgibellini/pen/zVqLLd
