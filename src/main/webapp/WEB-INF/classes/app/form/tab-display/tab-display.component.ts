import { Component, OnInit } from '@angular/core';
import { FormService } from "../form.service";

@Component({
  selector: 'app-tab-display',
  templateUrl: './tab-display.component.html'
})
export class TabDisplayComponent implements OnInit {

  serviceDisplayNameError: string;
  serviceDisplayShortNameError: string;
  serviceDisplayNameENError: string;
  serviceEnglishShortDisplayNameError: string;
  serviceDisplayNameRUError: string;
  serviceRussianShortDisplayNameError: string;

  static serviceNameExists: string = "This service name exists";

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formService.getDisplayErrorData().subscribe(err => {
      if (Object.keys(err).length === 0) {
        this.serviceDisplayNameError = "";
        this.serviceDisplayShortNameError = "";
        this.serviceDisplayNameENError = "";
        this.serviceEnglishShortDisplayNameError = "";
        this.serviceDisplayNameRUError = "";
        this.serviceRussianShortDisplayNameError = "";
      } else {
        for (let i = 0; i < err.error.length; i++) {
          if (err.error[i] == "displayName") {
            this.serviceDisplayNameError = TabDisplayComponent.serviceNameExists;
          }

          if (err.error[i] == "displayShortName") {
            this.serviceDisplayShortNameError = TabDisplayComponent.serviceNameExists;
          }

          if (err.error[i] == "displayNameEN") {
            this.serviceDisplayNameENError = TabDisplayComponent.serviceNameExists;
          }

          if (err.error[i] == "displayShortNameEN") {
            this.serviceEnglishShortDisplayNameError = TabDisplayComponent.serviceNameExists;
          }

          if (err.error[i] == "displayNameRU") {
            this.serviceDisplayNameRUError = TabDisplayComponent.serviceNameExists;
          }

          if (err.error[i] == "displayShortNameRU") {
            this.serviceRussianShortDisplayNameError = TabDisplayComponent.serviceNameExists;
          }
        }
      }
    });
  }
}
