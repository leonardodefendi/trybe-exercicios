function ModuleDetails() {
  const modulos = ['Fundamentos', 'Front-End', 'Back-End', 'Ciência da computação']
  return (
    <ul>
      {modulos.map((modulo) => (
        <li> { modulo } </li>
      ))}
    </ul>
  );
}

export default ModuleDetails;
