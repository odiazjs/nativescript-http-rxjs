import {Inject, Injector, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {ResponseObject} from '.././responseObject';

export interface IHttpContract {
    
   Get () : Observable<ResponseObject>
   Post (data : JSON) : Response
   Delete (id : number) : Response
   
}