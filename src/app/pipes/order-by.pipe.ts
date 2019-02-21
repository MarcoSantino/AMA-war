import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(users: User[], order: string): User[] {

    // Check if is not null
    if (!users || !order) { return users; }

    return users.sort((a: User, b: User) => {

      // Order * (-1): We change our order
      return a[order] > b[order] ? 1 : - 1;
    });
  }

}
