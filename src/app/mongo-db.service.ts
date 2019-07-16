import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class MongoDbService {

  servidor = "http://192.168.1.7:8080"

  constructor(private http:Http) { }
  error(error): any {
    if (error.status == 400)
      error.data = JSON.parse(error._body);
    throw error;
  }

  getRoot(url) {
    return this.http.get(url).toPromise();
  }
  async get(url) {
    try {
      let data: any = await this.http.get(`${this.servidor}${url}`).toPromise()
      if (data.status != 400 || data.status != 403) {
        return JSON.parse(data._body);
      }
    } catch (error) {
      error.data = { msg: error._body, status: error.status };
      throw error;
    }
  }
  post(url, body) {
    return this.http.post(`${this.servidor}${url}`, body).toPromise()
  }

  put(url, body) {
    return this.http.put(`${this.servidor}${url}`, body).toPromise()
  }

  delete(url) {
    return this.http.delete(`${this.servidor}${url}`).toPromise()
  }
}
