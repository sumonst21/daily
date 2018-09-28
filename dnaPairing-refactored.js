function pairElement(str) {
  var dnaMap = {G: 'C', C: 'G', A: 'T', T: 'A'};
  return str.split('').map(piece => {
  	return [piece, dnaMap[piece]];
  });
};
pairElement("GCG");