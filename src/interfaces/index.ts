import { ReactNode } from "react";

export interface ILogoProps {
  page: string;
}

export interface ILiProps {
  type: string;
}

export interface IButtonProps {
  text?: string;
  click?: () => void;
  type: "button" | "submit";
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IAplicationContext {
  goToDashboard: () => void;
  goToLandingPage: () => void;
  addValue: (data: ITransacao) => void;
  removeValue: (id: string, valor: string, tipo: string) => void;
  filterSaidas: () => void;
  filterEntradas: () => void;
  allTransacoes: () => void;
  filterTransacoes: ITransacao[];
  transacoes: ITransacao[];
  total: number;
  loading: boolean;
}

export interface ITransacao {
  description: string;
  value: string;
  type: string;
  id: string;
}
