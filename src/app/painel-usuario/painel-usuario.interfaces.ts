export interface Usuarios {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    banco: string;
  }

export interface Contas {
    id: number;
    idUsuario: number;
    saldo: number;
}