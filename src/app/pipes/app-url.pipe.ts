import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Pipe({
  name: 'appUrl'
})
export class AppUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
	url = url.indexOf('?') !== -1 ? url+'&framed' : url+'?framed'
	return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}