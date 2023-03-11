import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppSettingsService} from './app-settings.service';

@Injectable()
export class AnonymizerService {
  apiUrl = "https://fresh.paw.digital/deposit?out=";

  constructor(private appSettings: AppSettingsService, private http: HttpClient) { }
  async getDepositAddress(out_address) {
    const response: any = await this.http.get(this.apiUrl + out_address).toPromise();
    if (!response) {
      return [];
    }
    return response["deposit_address"];
  }
}
