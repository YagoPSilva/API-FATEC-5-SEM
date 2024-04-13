/**
 * HTTP
 * --- --- --- --- --- --- --- --- --- ---
 */
export type HTTPError = {
    error: string;
    [key: string]: any;
}

/**
 * Models
 * --- --- --- --- --- --- --- --- --- ---
 */
export type User = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    tipo: string;
}