import { Injectable } from '@angular/core';
import {HttpService} from "@services/http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  async login(username: string, password: string) {
    return this.http.post('admin/login', {username, password}).subscribe({
      next: (res) => {
        return new Promise(resolve => resolve(res))
      },
      error: err => new Promise((resolve, reject) => reject(err.error))
    });
  }
}
