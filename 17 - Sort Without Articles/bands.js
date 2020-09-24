const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const removeArticle = bands => {
  const regex = /^The|An|A/;
  let withoutArticle = bands.map(band => {
    let bandArr = band.split(' ');
    if (regex.test(bandArr[0])) {
      return bandArr.slice(1).join(' ');
    } else {
      return bandArr.join(' ');
    }
  });
  return withoutArticle.sort();
}
// console.log(removeArticle(bands));
