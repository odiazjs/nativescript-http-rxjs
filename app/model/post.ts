export class Post {
    
    constructor (public UserId: number, public Id: string, public Title: string, public Body: string) {
        this.UserId = UserId;
        this.Id = Id;
        this.Title = Title;
        this.Body = Body;
    }
    
    
}