
import {DefaultRegisteredServiceAccessStrategy, RegisteredServiceAccessStrategy} from './access-strategy';
import {DefaultRegisteredServiceMultifactorPolicy, RegisteredServiceMultifactorPolicy} from './multifactor';
import {RefuseRegisteredServiceProxyPolicy, RegisteredServiceProxyPolicy} from './proxy-policy,ts';
import {
  DefaultRegisteredServiceUsernameProvider,
  RegisteredServiceUsernameAttributeProvider
} from './attribute-provider';
import {
  RegisteredServiceAttributeReleasePolicy,
  ReturnAllowedAttributeReleasePolicy
} from './attribute-release';
import {RegisteredServicePublicKey} from './public-key';
import {DefaultRegisteredServiceProperty} from './property';
import {RegisteredServiceContact} from './contact';
import {DefaultRegisteredServiceExpirationPolicy, RegisteredServiceExpirationPolicy} from './expiration';

export abstract class RegisteredService {
  serviceId: String;
  name: String;
  theme: String;
  informationUrl: String;
  privacyUrl: String;
  responseType: String;
  displayName: String;
  displayShortName: String;
  displayNameEN: String;
  displayShortNameEN: String;
  displayNameRU: String;
  displayShortNameRU: String;
  id: number;
  description: String;
  proxyPolicy: RegisteredServiceProxyPolicy;
  evaluationOrder: number;
  usernameAttributeProvider: RegisteredServiceUsernameAttributeProvider;
  requiredHandlers: String[] = [];
  attributeReleasePolicy: RegisteredServiceAttributeReleasePolicy;
  multifactorPolicy: RegisteredServiceMultifactorPolicy;
  logo: String;
  logoutUrl: String;
  logoutType: String;
  accessStrategy: RegisteredServiceAccessStrategy;
  publicKey: RegisteredServicePublicKey;
  properties: Map<String, DefaultRegisteredServiceProperty>;
  contacts: RegisteredServiceContact[];
  expirationPolicy: RegisteredServiceExpirationPolicy;

  constructor(service?: RegisteredService) {
    this.serviceId = service && service.serviceId;
    this.name = service && service.name;
    this.theme = service && service.theme;
    this.informationUrl = service && service.informationUrl;
    this.displayName = service && service.displayName;
    this.displayShortName = service && service.displayShortName;
    this.displayNameEN = service && service.displayNameEN;
    this.displayShortNameEN = service && service.displayShortNameEN;
    this.displayNameRU = service && service.displayNameRU;
    this.displayShortNameRU = service && service.displayShortNameRU;
    this.privacyUrl = service && service.privacyUrl;
    this.responseType = service && service.responseType;
    this.id = (service && service.id) || -1;
    this.description = service && service.description;
    this.proxyPolicy = (service && service.proxyPolicy) || new RefuseRegisteredServiceProxyPolicy();
    this.evaluationOrder = (service && service.evaluationOrder) || -1;
    this.usernameAttributeProvider = (service && service.usernameAttributeProvider) || new DefaultRegisteredServiceUsernameProvider();
    this.requiredHandlers = service && service.requiredHandlers;
    this.attributeReleasePolicy = (service && service.attributeReleasePolicy) || new ReturnAllowedAttributeReleasePolicy();
    this.multifactorPolicy = (service && service.multifactorPolicy) || new DefaultRegisteredServiceMultifactorPolicy();
    this.logo = service && service.logo;
    this.logoutUrl = service && service.logoutUrl;
    this.logoutType = (service && service.logoutType) || 'BACK_CHANNEL';
    this.accessStrategy = (service && service.accessStrategy) || new DefaultRegisteredServiceAccessStrategy();
    this.publicKey = service && service.publicKey;
    this.properties = service && service.properties;
    this.contacts = service && service.contacts;
    this.expirationPolicy = (service && service.expirationPolicy) || new DefaultRegisteredServiceExpirationPolicy();
  }
}

export abstract class AbstractRegisteredService extends RegisteredService {
  constructor(service?: RegisteredService) {
    super(service);
  }
}

export class RegexRegisteredService extends AbstractRegisteredService {
  static cName = 'org.apereo.cas.services.RegexRegisteredService';

  static instanceOf(obj: any): boolean {
    return obj && obj['@class'] === RegexRegisteredService.cName;
  }

  constructor(service?: RegisteredService) {
    super(service);
    this['@class'] = RegexRegisteredService.cName;
  }
}
