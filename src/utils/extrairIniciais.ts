function extrairIniciais(nomeCompleto) {
  const nomes = nomeCompleto.split(' ');

  if (nomes.length === 0) {
    throw new Error('O nome completo não pode estar vazio.');
  }

  const primeiraInicial = nomes[0].charAt(0).toUpperCase();
  const segundaInicial =
    nomes.length > 1 ? nomes[1].charAt(0).toUpperCase() : '';

  return primeiraInicial + segundaInicial;
}

export { extrairIniciais };
