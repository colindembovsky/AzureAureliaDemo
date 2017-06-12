import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './api';

@autoinject
export class App {
  public message = 'Hello World!';
  public values: string[];

  constructor(public api: ApiWrapper) {
    this.initValues();
  }

  private async initValues() {
    try {
      this.values = <any>await this.api.client.fetch("/values")
        .then((res) => res.json());
    } catch (ex) {
      console.error(ex);
    }
  }
}
