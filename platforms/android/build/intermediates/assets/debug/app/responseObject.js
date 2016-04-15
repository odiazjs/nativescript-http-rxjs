"use strict";
var ResponseObject = (function () {
    function ResponseObject(httpResponse) {
        this.result = httpResponse.json();
        this.httpStatusCode = httpResponse.status;
    }
    return ResponseObject;
}());
exports.ResponseObject = ResponseObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNwb25zZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFLSSx3QkFBYSxZQUF1QjtRQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFXLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUE7SUFFN0MsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxzQkFBYyxpQkFZMUIsQ0FBQSJ9