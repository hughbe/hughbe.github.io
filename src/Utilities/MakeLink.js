const makeLink = (name) => name.replace(/ /g, '-').replace(/\//g, '-').replace(/&/g, 'and');
export default makeLink;