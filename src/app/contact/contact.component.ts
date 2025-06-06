import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private http: HttpClient) {}

  contactData  = {
    name: '',
    email: '',
    message: '',
    privacy: false
  }

  mailTest = false;

  onSubmit(ngForm: NgForm){
    if (ngForm.form.valid && ngForm.submitted && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('send post complete');
            ngForm.resetForm();
          }
        
      });
    } else {
       ngForm.resetForm();
    }
  }

  post = {
    endPoint: '/projects/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      }
    }
  }

}
