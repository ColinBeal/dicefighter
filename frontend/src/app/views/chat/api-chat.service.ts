import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiChatService {
  private route = 'http://localhost:3000/chat';

  constructor(private http: HttpClient) { }

  createAudioTranscription(formData: any): Observable<any> {
    return this.http.post<any>(this.route + '/whisper', formData);
  }
}