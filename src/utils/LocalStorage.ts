function SaveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, value);
    console.log(`Objeto salvo com sucesso: ${key}`);
  } catch (e) {
    console.error('Erro ao salvar objeto no localStorage', e);
  }
}

function ReadFromLocalStorage(key: string): any {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      console.log(`Nenhum valor encontrado para a chave: ${key}`);
      return null;
    } else {
      console.log(`Objeto lido com sucesso: ${key}`);
      return value;
    }
  } catch (e) {
    console.error('Erro ao ler ou parsear objeto do localStorage', e);
    return null;
  }
}

function DeleteFromLocalStorage(key: string): any {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Erro ao apagar ou parsear objeto do localStorage', e);
    return null;
  }
}

export { SaveToLocalStorage, ReadFromLocalStorage, DeleteFromLocalStorage };
