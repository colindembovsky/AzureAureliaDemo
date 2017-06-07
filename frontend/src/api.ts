import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { AureliaConfiguration } from 'aurelia-configuration';

@autoinject
export class ApiWrapper {
    public message = 'Hello World!';
    public values: string[];

    constructor(public client: HttpClient, private aureliaConfig: AureliaConfiguration) {
        client.configure(config => {
            config
                .withBaseUrl(aureliaConfig.get("api.baseUri"))
                .withDefaults({
                    headers: {
                        Accept: 'application/json',
                    },
                });
        });
    }
}
