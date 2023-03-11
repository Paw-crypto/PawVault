import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import BigNumber from 'bignumber.js';
import {AddressBookService} from '../../services/address-book.service';
import {BehaviorSubject} from 'rxjs';
import {WalletService} from '../../services/wallet.service';
import {NotificationService} from '../../services/notification.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {WorkPoolService} from '../../services/work-pool.service';
import {AppSettingsService} from '../../services/app-settings.service';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {PriceService} from '../../services/price.service';
import {NanoBlockService} from '../../services/nano-block.service';
import { QrModalService } from '../../services/qr-modal.service';
import { environment } from 'environments/environment';
import { TranslocoService } from '@ngneat/transloco';
import {HttpClient} from '@angular/common/http';

const nacl = window['nacl'];

@Component({
  selector: 'app-thirdpartyapps',
  templateUrl: './thirdpartyapp.component.html',
  styleUrls: ['./thirdpartyapp.component.css']
})
export class ThirdPartyAppComponent implements OnInit {
  activePanel = 'app-thirdpartyapp';
  constructor(
    private router: ActivatedRoute,
    private walletService: WalletService,
    private addressBookService: AddressBookService,
    private notificationService: NotificationService,
    private nodeApi: ApiService,
    private nanoBlock: NanoBlockService,
    public price: PriceService,
    private workPool: WorkPoolService,
    public settings: AppSettingsService,
	private http: HttpClient,
    private util: UtilService,
    private qrModalService: QrModalService,
    private translocoService: TranslocoService,
    private baserouter: Router) { }

  async ngOnInit() {
    const params = this.router.snapshot.queryParams;
  }

}
