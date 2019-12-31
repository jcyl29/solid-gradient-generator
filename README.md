# CSS Solid gradient generator

Consider this an example of a linear gradient that generates a solid list of colors:

```
background: linear-gradient(0deg, red 0%, red 30%, transparent 30%, transparent 35%, blue 35%, blue 65%, transparent 65%, transparent 70%, pink 70%, pink 100%)
```

The first argument is how to orient the gradient -- so the colors will be displayed horizontally.  This will apply a red color from start from 0 to 30% of the width of the container, then a transparent color starting at a position that is 30% of the width and ending at a position that is 35% of the width of the container.  The process is repeated with the blue and pink color as well as the spacer, i.e. transparent colors.  This is how you apply these solid colors -- you specifiy a starting position and an ending position in percentages.  Eventually your ending position will be 100% to complete the width of the container.

With this example, I have made a utility function where given: 
* an orientation
* an array of colors
* an optional spacer width, defined as a percentage of the container width

It will output a string like the aforementioned example

## Browser compatibility
[IE10+](https://caniuse.com/#search=linear-gradient) 

## Demo
[codepen demo](https://codepen.io/jcyl29/pen/MWYvBqR)