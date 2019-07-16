import { Injectable } from '@angular/core';
import {MongoDbService} from './mongo-db.service';

@Injectable()
export class DbService {

  constructor(private mongoDB: MongoDbService) { }

  buscarContato(){
    return this.mongoDB.get('/usuarios')
  }

}
