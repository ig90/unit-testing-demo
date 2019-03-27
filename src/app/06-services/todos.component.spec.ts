import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from '../../../node_modules/rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });
  // testing ngOnInit method
  it('should set todos property with items returned from the server', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {  // jasmine function spyOn()
      return from([ todos ]);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });
});
