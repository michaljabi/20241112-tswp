import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionItem } from './auction-item';
import { environment } from '../../environments/environment'

// Stateless — zawsze docelowo będziemy pytać backend.
@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  // /api/auctions - ścieżka produkcyjna
  private baseURL = environment.baseURL + '/auctions';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.baseURL);
  }

  add(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.baseURL, auction);
  }
}
