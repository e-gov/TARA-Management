import {Component, Input, OnInit} from '@angular/core';
import {Messages} from "../../messages";
import {Data} from "../data";
import {ControlContainer, NgForm} from "@angular/forms";
import {Row, RowDataSource} from "../row";
import {Util} from "../../util/util";
import {DefaultRegisteredServiceProperty} from "../../../domain/property";
import {FormService} from '../form.service';

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

  dataSource: RowDataSource;
  displayName: string = "service.name";
  displayNameEnglish: string = "service.name.en";
  displayNameRussian: string = "service.name.ru";
  maxInputCharacters: number = 20;

  constructor(public messages: Messages,
              public data: Data,
              public formService: FormService) {
  }

  ngOnInit() {
    const rows = [];
    if (Util.isEmpty(this.data.service.properties)) {
      this.data.service.properties = new Map();
    }
    for (const p of Array.from(Object.keys(this.data.service.properties))) {
      rows.push(new Row(p));
    }
    this.dataSource = new RowDataSource(rows);
  }

  onInputChange(val: string) {
    if (this.formService.isInputUsingSpecialCharacters(val)) {
      this.maxInputCharacters = 20;
    } else {
      this.maxInputCharacters = 40;
    }
  }

  doChange(val: string) {
    if (Object.keys(this.data.service.properties).indexOf(this.displayName) > -1) {
      this.data.service.properties[this.displayName].values = [val];
    } else {
      this.data.service.properties[this.displayName] = new DefaultRegisteredServiceProperty();
      if (val) {
        this.data.service.properties[this.displayName].values = [val];

        if (Object.keys(this.data.service.properties).indexOf(this.displayNameEnglish) == -1) {
          this.data.service.properties[this.displayNameEnglish] = new DefaultRegisteredServiceProperty();
        }

        if (Object.keys(this.data.service.properties).indexOf(this.displayNameRussian) == -1) {
          this.data.service.properties[this.displayNameRussian] = new DefaultRegisteredServiceProperty();
        }
      }
    }
  }

}
