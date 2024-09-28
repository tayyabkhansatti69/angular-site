import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  // Convert data to form-data
  toFormData(form: FormGroup): FormData {
    const formData = new FormData();
    for (const key in form.controls) {
      const control = form.controls[key];
      if (control instanceof FormArray) {
        // Handle FormArray
        control.controls.forEach((ctrl) => {
          formData.append(key, ctrl.value);
        });
      } else if (control instanceof FormControl) {
        // Handle FormControl
        if (control.value !== null) {
          formData.append(key, control.value);
        }
      }
    }
    return formData;
  }
  // On file change
  fileChange(event, reactiveForm: FormGroup, innerFormControl: string): void {
    const file = event.target.files[0];
    reactiveForm.get(innerFormControl).setValue(file);
  }
  // On file clear
  fileClear(reactiveForm: FormGroup, innerFormControl: string) {
    reactiveForm.get(innerFormControl).setValue('');
  }
  // Format date
  formatDate(obj: object, keys: string[]): object {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    keys.forEach((key) => {
      let date = new Date(obj[key]);
      obj[key] = date.toLocaleDateString('en-CA', options);
    });
    return obj;
  }

  // Convert data to form-data and print it
  printFormData(form: FormGroup): void {
    const formData = new FormData();
    for (const key in form.controls) {
      if (form.controls.hasOwnProperty(key)) {
        const control = form.controls[key];
        if (control instanceof FormArray) {
          // Handle FormArray
          control.controls.forEach((ctrl, index) => {
            formData.append(`${key}[${index}]`, ctrl.value);
            console.log(`${key}[${index}]:`, ctrl.value);
          });
        } else if (control instanceof FormControl) {
          // Handle FormControl
          if (control.value !== null) {
            formData.append(key, control.value);
            console.log(`${key}:`, control.value);
          }
        }
      }
    }
  }

  // clear errors
  clearErrors(flags: { [key: string]: boolean }) {
    Object.keys(flags).forEach((key) => {
      flags[key] = false;
    });
  }

  // toast Msg
  toastMsg(
    options: object = {
      status: <string>'',
      title: <string>'',
      msg: <string>'',
    }
  ) {
    const liveToast = document.getElementById('liveToast');
    const msgEle = liveToast.querySelector('#toast-msg');
    const titleEle = liveToast.querySelector('#toast-title');

    const defsucessMsg = $localize`Successfully Done`;
    const defDangerMsg = $localize`Something Went Wrong`;

    if (options['status'] === 'success') {
      // title
      titleEle.innerHTML = options['title']
        ? `<i class="bi bi-check-square m-0"></i> <span>${options['title']}</span>`
        : `<i class="bi bi-check-square m-0"></i> <span>${defsucessMsg}</span>`;
      // style
      liveToast.classList.remove('bg-danger-subtle');
      liveToast.classList.add('bg-success-subtle');
    } else if (options['status'] === 'danger') {
      // title
      titleEle.innerHTML = options['title']
        ? `<i class="bi bi-x-square m-0"></i> <span>${options['title']}</span>`
        : `<i class="bi bi-x-square m-0"></i> <span>${defDangerMsg}</span>`;
      // style
      liveToast.classList.remove('bg-success-subtle');
      liveToast.classList.add('bg-danger-subtle');
    } else {
      // title
      titleEle.innerHTML = `<i class="bi bi-info-circle m-0"></i> <span>${options['title']}</span>`;
      // style
      liveToast.classList.remove('bg-success-subtle', 'bg-danger-subtle');
    }

    // add msg
    msgEle.innerHTML = options['msg'] ? `${options['msg']}` : ``;
    options['msg']
      ? msgEle.classList.add('mt-2')
      : msgEle.classList.remove('mt-2');

    // Show toast and close it
    liveToast.classList.add('show');
    setTimeout(() => {
      liveToast.classList.remove('show');
    }, 8000);
  }
}
