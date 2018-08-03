import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isIpad: any = navigator.userAgent.match(/iPad/i);
  isNexus = navigator.userAgent.match(/Nexus/i);
  isTouchDevice = 'ontouchstart' in window || (navigator.msMaxTouchPoints > 0);
  isBrowserIE = (window.navigator.userAgent.indexOf('Trident/') == -1) ? false : true;
  isBrowserEdge = navigator.userAgent.toLowerCase().indexOf('edge') > -1;
  isBrowserFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  constructor() { }
}
