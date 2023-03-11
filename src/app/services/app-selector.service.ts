import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppSelectorService {
  private allApps: any[] = [];

  constructor(private http: HttpClient) {
    // Load the list of all apps from local storage
    const storedApps = JSON.parse(localStorage.getItem('allApps'));
    if (storedApps) {
      this.allApps = storedApps;
    }
  }

  // Add a URL to the list of all apps, or update an existing app with new information
  addOrUpdateApp(app: any) {
    const index = this.allApps.findIndex(a => a.id === app.id);
    if (index !== -1) {
		app.userSelected = this.allApps[index].userSelected;
      this.allApps[index] = app;
    } else {
		app.userSelected = app.default_selected;
      this.allApps.push(app);
    }
    this.saveAllApps();
  }

  // Remove a URL from the list of all apps
  removeApp(app: any) {
    const index = this.allApps.findIndex(a => a.id === app.id);
    if (index !== -1) {
      this.allApps.splice(index, 1);
      this.saveAllApps();
    }
  }
  
  selectApp(app: any) {
    const index = this.allApps.findIndex(a => a.id === app.id);
    if (index !== -1) {
      this.allApps[index].userSelected = true;
      this.saveAllApps();
    }
  }

  // Remove a URL from the list of all apps
  unselectApp(app: any) {
    const index = this.allApps.findIndex(a => a.id === app.id);
    if (index !== -1) {
      this.allApps[index].userSelected = false;
      this.saveAllApps();
    }
  }


  // Get the list of all apps
  getAllApps() {
    return this.allApps;
  }

  // Get the list of selected URLs
  getSelectedApps() {
	  const selectedApps = [];
    this.allApps.forEach(storedApp => {
		if(storedApp.userSelected)
			selectedApps.push(storedApp);
	  }
	);
	return selectedApps;
  }

  // Save the list of all apps to local storage
  private saveAllApps() {
    localStorage.setItem('allApps', JSON.stringify(this.allApps));
  }
  
  // Retrieve the list of apps from the API and add them to the list of all apps
  async retrieveAppsFromApi() {
    const response = await this.http.get('https://hub.paw.digital/api/get_apps').toPromise();
    const apps = response as any[];
    apps.forEach(app => {
      this.addOrUpdateApp(app);
    });
	this.allApps.forEach(storedApp => {
	  if (!apps.map(app => app.id).includes(storedApp.id)) {
		this.removeApp(storedApp);
	  }
	});
  }
}