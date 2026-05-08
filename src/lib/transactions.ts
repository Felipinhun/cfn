export type Transaction = {
  id: number;
  data: string;
  categoria: string;
  favorecido: string;
  valor: number;
};

export const transactions: Transaction[] = [
  { id: 1, data: "2026-04-15", categoria: "Serviços de Terceiros - TI", favorecido: "TechCorp Soluções", valor: 45000.0 },
  { id: 2, data: "2026-04-20", categoria: "Diárias e Passagens", favorecido: "Agência Voar Bem", valor: 12500.5 },
  { id: 3, data: "2026-05-02", categoria: "Eventos e Treinamentos", favorecido: "Centro de Convenções", valor: 8900.0 },
];
