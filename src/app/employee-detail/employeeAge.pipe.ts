import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'employeeAge'
})

export class EmployeeAgePipe implements PipeTransform{
    transform(value:number) :string{
        return value+' years old';
    }
}