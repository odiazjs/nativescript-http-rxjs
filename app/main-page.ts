import 'reflect-metadata';
import {Http, Response} from 'angular2/http';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {Inject, Component, View} from 'angular2/core';
import {HttpService} from './services/http.service';
import {Checkbox} from './checkbox';
import {Page} from 'ui/page';
import {Injectable} from 'angular2/core';
import {Post} from './model/post';

@Component({
    selector: 'main',
    providers: [HttpService],
    directives: [Checkbox],
    templateUrl: './views/main-page.xml'
})

@Injectable()
export class MainPage {

    public httpService: HttpService
    public _url: string
    public posts: Post[]
    public errorMessage: string
    
    constructor(httpService: HttpService) {
        this.httpService = httpService
    }
    
    getPosts () {
        
        this.posts = []
        this.httpService.Get()
                         .subscribe(
                            responseObject => this.posts = responseObject.result,
                            error => this.errorMessage = <any>error
                         )	
                                           
        }
         

}