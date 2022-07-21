import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StakingService {
  apiUrl = "https://apps.paw.digital/staking/stake_addresses.php?paw_address=";

  constructor(private http: HttpClient) { }
  async findStakingAddressesFor(address) {
    const response: any = await this.http.get(this.apiUrl + address).toPromise();
    if (!response) {
      return [];
    }
    return response["stake_accounts"];
  }
}
