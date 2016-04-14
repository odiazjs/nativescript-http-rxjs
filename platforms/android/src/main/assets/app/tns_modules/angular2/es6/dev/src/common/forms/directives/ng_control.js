import { AbstractControlDirective } from './abstract_control_directive';
import { unimplemented } from 'angular2/src/facade/exceptions';
/**
 * A base class that all control directive extend.
 * It binds a {@link Control} object to a DOM element.
 *
 * Used internally by Angular forms.
 */
export class NgControl extends AbstractControlDirective {
    constructor(...args) {
        super(...args);
        this.name = null;
        this.valueAccessor = null;
    }
    get validator() { return unimplemented(); }
    get asyncValidator() { return unimplemented(); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy9uZ19jb250cm9sLnRzIl0sIm5hbWVzIjpbIk5nQ29udHJvbCIsIk5nQ29udHJvbC5jb25zdHJ1Y3RvciIsIk5nQ29udHJvbC52YWxpZGF0b3IiLCJOZ0NvbnRyb2wuYXN5bmNWYWxpZGF0b3IiXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4QkFBOEI7T0FDOUQsRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0M7QUFFNUQ7Ozs7O0dBS0c7QUFDSCwrQkFBd0Msd0JBQXdCO0lBQWhFQTtRQUF3Q0MsZUFBd0JBO1FBQzlEQSxTQUFJQSxHQUFXQSxJQUFJQSxDQUFDQTtRQUNwQkEsa0JBQWFBLEdBQXlCQSxJQUFJQSxDQUFDQTtJQU03Q0EsQ0FBQ0E7SUFKQ0QsSUFBSUEsU0FBU0EsS0FBZUUsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDckRGLElBQUlBLGNBQWNBLEtBQWVHLE1BQU1BLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0FBRzVESCxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7dW5pbXBsZW1lbnRlZH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuLyoqXG4gKiBBIGJhc2UgY2xhc3MgdGhhdCBhbGwgY29udHJvbCBkaXJlY3RpdmUgZXh0ZW5kLlxuICogSXQgYmluZHMgYSB7QGxpbmsgQ29udHJvbH0gb2JqZWN0IHRvIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogVXNlZCBpbnRlcm5hbGx5IGJ5IEFuZ3VsYXIgZm9ybXMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ0NvbnRyb2wgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuICBuYW1lOiBzdHJpbmcgPSBudWxsO1xuICB2YWx1ZUFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvciA9IG51bGw7XG5cbiAgZ2V0IHZhbGlkYXRvcigpOiBGdW5jdGlvbiB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH1cbiAgZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEZ1bmN0aW9uIHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfVxuXG4gIGFic3RyYWN0IHZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlOiBhbnkpOiB2b2lkO1xufVxuIl19