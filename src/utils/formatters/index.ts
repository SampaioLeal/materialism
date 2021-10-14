export function formatDate(date: Date) {
  if (date) {
    return new Date(date).toLocaleString("pt-BR").split(" ")[0];
  }
  return "Data não informada";
}

export function formatCPF(cpf: string) {
  return cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    (regex, argumento1, argumento2, argumento3, argumento4) =>
      argumento1 + "." + argumento2 + "." + argumento3 + "-" + argumento4
  );
}
