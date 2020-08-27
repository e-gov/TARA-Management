/**
 * Created by tschmidt on 2/14/17.
 */
import {Injectable} from '@angular/core';
import {AbstractRegisteredService} from '../../domain/registered-service';
import {FormData} from '../../domain/form-data';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {UnknownComponent} from '../unknown/unknown.component';
import {MatDialog} from '@angular/material';
import {BehaviorSubject, forkJoin, Observable, Subject} from 'rxjs';
import {ServiceItem} from "../../domain/service-item";
import {ServiceViewService} from "../services/service.service";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class FormService {

  private displayErrorsSubject = new Subject();

  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private service: ServiceViewService) {}

  getService(id: string): Observable<AbstractRegisteredService> {
    return this.http.get<AbstractRegisteredService>('getService?id=' + id)
      .pipe(
        take(1),
        map(resp => {
          return resp as AbstractRegisteredService;
        }),
        catchError(e => this.handleError(e, this.dialog))
      );
  }

  saveService(service: AbstractRegisteredService): Observable<number> {
    return this.http.post('saveService', service)
      .pipe(
        catchError(e => this.handleError(e, this.dialog))
      );
  }

  setDisplayErrorData(data) {
    this.displayErrorsSubject.next(data);
  }

  getDisplayErrorData(): Observable<any> {
    return this.displayErrorsSubject.asObservable();
  }

  isInputUsingSpecialCharacters(value: string) {
    const cyrillicCharacters = /[а-яА-ЯЁё]/;
    const specialCharacters = ["Õ", "Š", "Ž", "š", "ž", "õ", "Ą", "Č", "Ę", "Ė", "Į", "Š", "Ų", "Ū", "Ž", "ą", "č", "ę", "ė", "į", "š", "ų", "ū", "ž"];
    return cyrillicCharacters.test(value) || specialCharacters.some(char => value.includes(char));
  }

  formData(): Observable<FormData> {
    return this.http.get<FormData>('formData')
      .pipe(
        catchError(e => this.handleError(e, this.dialog))
      );
  }

  getAllServices(): Observable<AbstractRegisteredService[]> {
    let subject = new Subject<AbstractRegisteredService[]>();
    this.service.getServices("default")
        .subscribe(services => {
          this.getServiceNames(services).subscribe(service => {
            subject.next(service);
          });
        });

    return subject.asObservable();
  }

  getServiceNames(serviceItemList: ServiceItem[]): Observable<AbstractRegisteredService[]> {
    let subject = new Subject<AbstractRegisteredService[]>();
    let serviceList: AbstractRegisteredService[] = [];
    for (const serviceItem of serviceItemList) {
      this.getService(String(serviceItem.assignedId)).pipe(take(1)).subscribe(service => {
        serviceList.push(service);

        if (serviceList.length == serviceItemList.length) {
          subject.next(serviceList);
        }
      });
    }

    return subject.asObservable();
  }

  handleError(e: HttpErrorResponse, dialog: MatDialog): Observable<any> {
    if (e.status === 0) {
      dialog.open(UnknownComponent, {
        width: '500px',
        position: {top: '100px'}
      })
    } else {
      console.log('An error Occurred: ' + e.message);
      return throwError(e);
    }
  }

}
