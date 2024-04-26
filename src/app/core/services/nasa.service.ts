import { Injectable } from '@angular/core';
import { NASA_API_KEY, NASA_URL } from '../../../../env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiKey = NASA_API_KEY;
  private apiUrl = NASA_URL;

  constructor(private httpCliente: HttpClient) {}

  getAPOD(): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}`;
    return this.httpCliente.get<any>(url);
  }
}
