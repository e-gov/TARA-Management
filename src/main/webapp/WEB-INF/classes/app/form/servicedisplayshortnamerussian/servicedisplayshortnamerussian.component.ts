import { Component, OnInit } from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";
import {Messages} from "../../messages";
import {Data} from "../data";

@Component({
  selector: 'app-servicedisplayshortnamerussian',
  templateUrl: './servicedisplayshortnamerussian.component.html',
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class ServicedisplayshortnamerussianComponent implements OnInit {

  constructor(public messages: Messages,
              public data: Data) {
  }

  ngOnInit() {
  }

}
