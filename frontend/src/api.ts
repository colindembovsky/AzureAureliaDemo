import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import environment from './environment';

@autoinject
export class ApiWrapper {
    public message = 'Hello World!';
    public values: string[];

    constructor(public client: HttpClient) {
        client.configure(config => {
            config
                .withBaseUrl(environment.apiBaseUrl)
                .withDefaults({
                    headers: {
                        Accept: 'application/json',
                    },
                });
        });
    }
}
