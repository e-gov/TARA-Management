import {Component, Input, OnInit} from '@angular/core';
import {Messages} from "../../messages";
import {Data} from "../data";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-servicedisplayname',
  templateUrl: './servicedisplayname.component.html',
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class ServicedisplaynameComponent implements OnInit {

  @Input() serviceError: string;

  constructor(public messages: Messages,
              public data: Data) {
  }

  ngOnInit() {
  }

}
