import { Injectable } from '@angular/core';
import { ICat } from '../interfaces/cat.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatsRequestService {
  public readonly catBaseUrl = 'https://api.thecatapi.com/v1/';
  private catApiKey = 'live_WQCqn5yvaz8oxdPOWiAsA9NLWSjSiBz8OXiAqEHAX2F3GrL3HEn6VWAmALw0B4As';
  private catsQuantityLimit = 20;

  constructor(private http: HttpClient) {
  }

  public getCats(): Observable<ICat[]> {
    return this.http.get<ICat[]>(this.catBaseUrl + 'images/search', {
      params: {
        api_key: this.catApiKey,
        limit: this.catsQuantityLimit,
        mime_types: 'jpg'
      },
    });
  }
}
