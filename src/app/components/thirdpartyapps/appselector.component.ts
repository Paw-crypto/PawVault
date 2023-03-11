import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSelectorService } from '../../services/app-selector.service';

const nacl = window['nacl'];

@Component({
  selector: 'app-apps',
  templateUrl: './appselector.component.html',
  styleUrls: ['./appselector.component.css']
})
export class AppSelectorComponent implements OnInit {
  activePanel = 'app-apps';
  apps: any[] = [];

  constructor(private http: HttpClient, private appSelector: AppSelectorService) {}

	ngOnInit() {

	// Get the list of apps from the AppSelectorService
	this.apps = this.appSelector.getAllApps();
}

onAppSelected(app: any) {
this.appSelector.selectApp(app);
}

onAppDeselected(app: any) {
this.appSelector.unselectApp(app);
}
}