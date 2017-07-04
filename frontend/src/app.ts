import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './api';

@autoinject
export class App {
  public message = 'Hello World!';
  public version = 'Unknown';
  public values: string[];
  public change = 'K8s demo';

  constructor(public api: ApiWrapper) {
    this.initValues().then(() => this.initVersion());
  }

  private async initVersion() {
    try {
      this.version = await this.api.client.fetch("/version")
        .then((res) => res.json());
    } catch (ex) {
      console.error(ex);
    }
  }

  private async initValues() {
    try {
      this.values = await this.api.client.fetch("/values")
        .then((res) => res.json());
    } catch (ex) {
      console.error(ex);
    }
  }
}
