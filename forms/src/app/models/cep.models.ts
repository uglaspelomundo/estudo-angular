export interface RetornoCep {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
  erro?: boolean;
}
