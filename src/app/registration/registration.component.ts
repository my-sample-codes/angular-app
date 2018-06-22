import {
    Component,
    OnInit
} from '@angular/core';
import {
    Location
} from '@angular/common';
import {
    FormControl
} from '@angular/forms';
import {
    Router
} from '@angular/router';

import {
    User
} from '../models/user-model';
import {
    Address
} from '../models/user-model';
import {
    RegisterService
} from './register.service';



@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

    address = new Address('', '', '', '', 0, '');
    userModel = new User('', '', '', '', '', this.address);

    constructor(private location: Location, private _registerService: RegisterService, private router: Router) {}

    ngOnInit() {}

    goBack(): void {
        this.location.back();
    }

    submitForm() {
        console.log('FORM WILL BE SUBMITTED........');
        this._registerService.registerUser(this.userModel).subscribe(data => {
            console.log('Kuch to mila hai : ' + data);
            this.userModel = data;
            this.router.navigate(['/dashboard']);
        }, error => {
            alert('Error MILA hai bhaai : ' + error);
        });
    }
}
