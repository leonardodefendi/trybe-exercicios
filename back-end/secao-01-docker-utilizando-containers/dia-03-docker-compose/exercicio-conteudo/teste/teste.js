const Media = (arrayNumeros) => {
  let soma = 0;
  arrayNumeros.forEach((numero) => soma = soma + numero);
  const media = soma/arrayNumeros.length;
  return media
}

Media([1,2])