"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var responseObject_1 = require('.././responseObject');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.Get = function () {
        return this.http.get(this.url)
            .map(function (data) { return new responseObject_1.ResponseObject(data); });
    };
    PostService.prototype.Post = function (data) {
        return this.response;
    };
    PostService.prototype.Delete = function (id) {
        return this.response;
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsK0JBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFJbkQ7SUFLSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRywyQ0FBMkMsQ0FBQztJQUMzRCxDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2IsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUE7SUFFMUQsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBTSxJQUFhO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBUSxFQUFXO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQXZCTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBeUJiLGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxtQkFBVyxjQXdCdkIsQ0FBQSJ9