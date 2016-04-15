import {Inject, Injector, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Post} from './model/post'

export class ResponseObject {
    
    public result : Post[]
    public httpStatusCode : number
    
    constructor (httpResponse : Response) {
        
        this.result         = httpResponse.json()
        this.httpStatusCode = httpResponse.status
        
    }
    
}