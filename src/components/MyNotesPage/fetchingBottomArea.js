// Returns the area of fecthing data at the bottom
// div.scrollTo: scroll position of the div
// div.clientHeight: div's view height
// div.scrollHeight: div's whole height
// @param {number} range - the desired loading distance
// @param {element} div

export default (range, div) =>
  div.scrollTop + div.clientHeight >= div.scrollHeight - range;
