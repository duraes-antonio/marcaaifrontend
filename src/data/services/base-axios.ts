import axios, {AxiosInstance} from 'axios';

// TODO: Atualizar domínio
export const ApiAxios = axios.create({
    baseURL: 'https://some-domain.com/api/',
    headers: {'X-Custom-Header': 'foobar'},
    responseType: 'json',
});

export abstract class ServiceAxios {
    constructor(
        private readonly instance: AxiosInstance,
        private readonly prefix: string,
    ) {}
}
