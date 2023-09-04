import { Injectable } from '@angular/core';
import {HttpService} from "@services/http.service";

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http: HttpService) { }

  get() {

  }
}
