import {Inject, Injector, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {IHttpContract} from '../contracts/http.contract.ts'
import {ResponseObject} from '.././responseObject';
import {Post} from '../model/post'

@Injectable()
export class PostService implements IHttpContract{
    
    public url : string
    public response : Response
    
    constructor (public http: Http) {
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    
    Get () : Observable<ResponseObject> {

        return this.http.get(this.url)
                        .map(data => new ResponseObject(data))
        
    }
    
    Post (data : Post[]) : Response {
        return this.response
    }
    
    Delete (id : number) : Response {
        return this.response
    }
    
}