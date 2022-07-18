## Lights Out
This exercise provides a chance to work with React events where the state and events happen in different classes.

### The Game
Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.

You can click on a cell to toggle that light — but it also toggles the light above it, to the left of it, to the right of it, and below it. (Cells on an edge or in the corner won’t flip as many lights, since they are missing some neighbors).

### Plan
Before reading further, take a moment to think about how you would design this, component-wise.

We’ll give you a component design further down, but thinking about the requirements and what components/state/props would be needed will help you learn the skills to design applications out of components.

When the game is won, the board should not be shown, but a simple “You Won” message should show in its place.

A small amount of code is provided, but there are lots of places where you’ll need to write code to get the game functional.

## Further Study
### Default Properties
Add default properties for the board sizes and how likely it is the a light on the initial board is turned on or off.

### Add Tests
Add tests for:

- rendering a cell Cell properly: this is a straightforward test, and could even be a snapshot test
- rendering the starter Board: you could write this as a snapshot test, but you’d need to make sure the initial board configuration was predictable in the tests. How could you do that?
- handling cell-clicking: this is harder test, but has the most value. You’ll need to do a non-shallow render of the Board, then find a cell, and ensure that clicking it causes the right cells to flip.
- checking for a win and showing a “You won!” message.