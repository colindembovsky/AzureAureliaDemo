import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

const baseUrl = "http://localhost:64705/api";

@autoinject
export class ApiWrapper {
    public message = 'Hello World!';
    public values: string[];

    constructor(public client: HttpClient) {
        client.configure(config => {
            config
                .withBaseUrl(baseUrl)
                .withDefaults({
                    headers: {
                        Accept: 'application/json',
                    },
                });
        });
    }
}
