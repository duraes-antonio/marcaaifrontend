export interface ResetPasswordService {
    resetRequest(email: string): Promise<void>;

    reset(password: string): Promise<void>;
}

/* TODO: Apagar fluxo
 * - Confirmar email ->
 *      Gerar e salvar dados da solicitação
 *      Enviar email com o token (DEVE ser aberto pelo celular)
 *      Mandar usuário para tela de redefinir senha
 * */
