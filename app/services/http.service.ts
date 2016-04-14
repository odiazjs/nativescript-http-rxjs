import {Inject, Injector, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Post} from '../model/post';

@Injectable()
export class HttpService {
    
    public url: string;
    
    constructor (public http: Http) {
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    
    get() {
        
        return this.http.get(this.url)
                        .map(response => <Post[]> response.json())
                        .catch(this.handleError)
        
    }
    
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || this.url + ' Server error');
    }

    
}