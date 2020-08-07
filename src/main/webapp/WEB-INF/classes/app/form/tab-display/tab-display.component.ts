import { Component, OnInit } from '@angular/core';
import { FormService } from "../form.service";

@Component({
  selector: 'app-tab-display',
  templateUrl: './tab-display.component.html'
})
export class TabDisplayComponent implements OnInit {

  serviceDisplayNameError: string;
  serviceEnglishShortDisplayNameError: string;

  static serviceNameExists: string = "This service name exists";

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formService.getDisplayErrorData().subscribe(err => {
      console.log("ERROR: " + err.error);
      if (err.error == "displayName") {
        this.serviceDisplayNameError = TabDisplayComponent.serviceNameExists;
      }

      if (err.error == "displayShortNameEN") {
        this.serviceEnglishShortDisplayNameError = TabDisplayComponent.serviceNameExists;
      }
    });
  }
}
