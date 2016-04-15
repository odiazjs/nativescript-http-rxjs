import 'reflect-metadata';
import {Http, Response} from 'angular2/http';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {Inject, Component, View} from 'angular2/core';
import {PostService} from './services/post.service';
import {Checkbox} from './checkbox';
import {Page} from 'ui/page';
import {Injectable} from 'angular2/core';
import {Post} from './model/post';

@Component({
    selector: 'main',
    providers: [PostService],
    directives: [Checkbox],
    templateUrl: './views/main-page.xml'
})

@Injectable()
export class MainPage {

    public postService: PostService
    public _url: string
    public posts: Post[]
    public errorMessage: string
    
    constructor(httpService: PostService) {
        this.postService = httpService
    }
    
    getPosts () {
        
        this.posts = []
        this.postService.Get()
                         .subscribe((responseObject) => {
                                responseObject.result
                                              .map((post) => {
                                                  this.posts.push(new Post(
                                                      post.userId, 
                                                      post.id, 
                                                      post.title, 
                                                      post.body
                                                  ))
                                              })
                            },
                            error => this.errorMessage = <any>error
                         )	
                                           
        }
}