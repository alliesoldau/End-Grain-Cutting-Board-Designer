# End Grain Cutting Board Generator

[Site Link](https://alliesoldau.github.io/Sandbox/index.html)

My fiance and I enjoy designing and building end grain cutting boards. The most frustrating part of the process has always been purchasing the right amount (and dimensions) of lumber to create what we want while limiting waste.

This site helps woodworkers to design checker pattern end grain cutting boards, and then recommends exactly how much lumber to purchase per wood type (accounting for kerf aka material lost to blade width) so that builders can feel confident heading into the lumber mill for their projects.

For an added challenge I built this all in Vanilla JavaScript to gain a deeper understanding of the language without relying on the library offered by React. I am hosting it on GitHub Pages.

App Utilization:
1. Input your board dimensions and wood choices into the Board Design Form
  *Click Submit to generate a visual representatoin of the board from a top-view and a side-view
  *Selecting Banana for scale? will superimpose a to-scale banana on the board to demonstrate the size of the board
2. Input your source board dimensions into the Source Board Info Form
  *Source Board Thickness is pulled from the information input in the Board Design Form
  *Click Submit to generate the source material recommendation
3. The program will recommend the length of board you should purchase to build your project
  *This math is not as straight forward as it may seem, because end grain cutting boards require planing, squaring, cross-cutting, and sanding. The math must account for material lost due to all of these processes.
  *Users can then choose to print the recommendation to bring with them to the mill

CSS:
*Bootstrap for dropdown and button formatting
*I played with background image formatting to allow for the visual representation of the cutting board to look like real wood
*Flexboxes allow the site to dyanmically scale with various screen widths
