export * from './core/singleton';
export * from './core/./Retainable';
export * from './core/./Observable';
export * from './core/./BaseService';
export * from './core/./UrlState/UrlState';
export * from './core/./extractErrorMessage';
export { AppConfig } from './core/./AppConfig';
export { AuthenticationService, IAuthentication } from './core/./AuthenticationService';
export { BaseEntitiesService, IBaseEntities } from './core/./services/BaseEntitiesService';
export * from './core/./RtService';
import * as repo from './core/./repositories';
import * as srv from './core/./services';
export { repo, srv };