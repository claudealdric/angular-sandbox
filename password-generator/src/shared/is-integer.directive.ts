import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isIntegerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isInteger = Number.isInteger(control.value);
    return isInteger ? null : { isInteger: { value: control.value } };
  };
}
