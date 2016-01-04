Load js file on the fly based on a given DOM element on the page with require.js and promise strategy.

## Example

- when discovering ```<input typ='range' /> ``` element, load range.slider.js otherwise do not load it on the fly
- remove ```<input typ='range' /> ``` and inspect your network console and expect to not load range.slider.js