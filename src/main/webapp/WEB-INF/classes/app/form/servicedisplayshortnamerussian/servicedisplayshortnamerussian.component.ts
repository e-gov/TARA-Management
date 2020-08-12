import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";
import {Messages} from "../../messages";
import {Data} from "../data";
import {Row, RowDataSource} from "../row";
import {FormData} from "../../../domain/form-data";
import {Util} from "../../util/util";
import {DefaultRegisteredServiceProperty} from "../../../domain/property";

@Component({
  selector: 'app-servicedisplayshortnamerussian',
  templateUrl: './servicedisplayshortnamerussian.component.html',
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class ServicedisplayshortnamerussianComponent implements OnInit {

  @Input() serviceError: string;

  dataSource: RowDataSource;
  displayName: string = "service.shortName.ru";

  constructor(public messages: Messages,
              public data: Data) {
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

  doChange(val: string) {
    if (Object.keys(this.data.service.properties).indexOf(this.displayName) > -1) {
      this.data.service.properties[this.displayName].values = [val];
    } else {
      this.data.service.properties[this.displayName] = new DefaultRegisteredServiceProperty();
      if (val) {
        this.data.service.properties[this.displayName].values = [val];
      }
    }
  }

}
