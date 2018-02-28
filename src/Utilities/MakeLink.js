const makeLink = (name) => name && name.replace(/ /g, '-').replace(/\//g, '-').replace(/&/g, 'and');

const findWithLink = (array, name) => {
  const lower = name && name.toLowerCase();
  return lower && array.find(project => makeLink(project.name).toLowerCase() === lower);
}

export { findWithLink };
export default makeLink;