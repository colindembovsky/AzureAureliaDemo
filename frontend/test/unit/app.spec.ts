import {App} from '../../src/app';
import {ApiWrapper} from '../../src/api';
import {HttpClientMock} from './utils/mock-fetch';
import {AureliaConfiguration} from 'aurelia-configuration';

describe('the app', () => {
  it('says hello', async done => {
    // arrange
    let aureliaConfig = new AureliaConfiguration();
    aureliaConfig.set("api.baseUri", "http://test");

    const client = new HttpClientMock();
    client.setup({
      data: ["testValue1", "testValue2", "testValue3"],
      headers: {
        'Content-Type': "application/json",
      },
      url: "/values",
    });
    const api = new ApiWrapper(client, aureliaConfig);

    // act
    let sut: App;
    try {
      sut = new App(api);
    } catch (e) {
      console.error(e);
    }

    // assert
    setTimeout(() => {
      expect(sut.message).toBe('Hello World!');
      expect(sut.values.length).toBe(3);
      expect(sut.values).toContain("testValue1");
      expect(sut.values).toContain("testValue2");
      expect(sut.values).toContain("testValue3");
      done();
    }, 10);
  });
});
