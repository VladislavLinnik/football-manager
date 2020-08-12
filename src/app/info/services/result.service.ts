import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from '../models/result.model';


@Injectable()
export class ResultService {

  constructor(private httpClient: HttpClient) {}


}
