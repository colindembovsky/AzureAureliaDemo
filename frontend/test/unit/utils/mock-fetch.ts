import { HttpClient } from 'aurelia-fetch-client';

export interface IMethodConfig {
    url: string;
    method?: string;
    status?: number;
    statusText?: string;
    headers?: {};
    data?: {};
};

export class HttpClientMock extends HttpClient {
    private config: IMethodConfig[] = [];

    public setup(config: IMethodConfig) {
        this.config.push(config);
    }

    public async fetch(input: Request | string, init?: RequestInit) {
        let url: string;
        if (typeof input === "string") {
            url = input;
        } else {
            url = input.url;
        }

        // find the matching setup method
        let methodConfig: IMethodConfig;
        methodConfig = this.config.find(c => c.url === url);
        if (!methodConfig) {
            console.error(`---MockFetch: No such method setup: ${url}`);
            return Promise.reject(new Response(null,
                {
                    status: 404,
                    statusText: `---MockFetch: No such method setup: ${url}`,
                }));
        }

        // set up headers
        let responseInit: ResponseInit = {
            headers: methodConfig.headers || {},
            status: methodConfig.status || 200,
            statusText: methodConfig.statusText || "",
        };

        // get a unified request object
        let request: Request;
        if (Request.prototype.isPrototypeOf(input)) {
            request = (<Request> input);
        } else {
            request = new Request(input, responseInit || {});
        }

        // create a response object
        let response: Response;
        const data = JSON.stringify(methodConfig.data);
        response = new Response(data, responseInit);

        // resolve or reject accordingly
        return response.status >= 200 && response.status < 300 ?
            Promise.resolve(response) : Promise.reject(response);
    }
}
