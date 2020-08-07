import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";
import {Messages} from "../../messages";
import {Data} from "../data";

@Component({
  selector: 'app-servicedisplayshortnameenglish',
  templateUrl: './servicedisplayshortnameenglish.component.html',
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class ServicedisplayshortnameenglishComponent implements OnInit {

  @Input() serviceError: string;

  constructor(public messages: Messages,
              public data: Data) {
  }

  ngOnInit() {
  }

}
