import {
    Component,
    OnInit
} from '@angular/core';
import {
    User
} from '../models/user-model';
import {
    Address
} from '../models/user-model';
import {
    RegisterService
} from '../registration/register.service';
import {
    Observable,
    throwError
} from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   public userModel;

    constructor(private _registerService: RegisterService) {}

    ngOnInit() {
        if (this._registerService.sharedUserObservable) {
            this._registerService.sharedUserObservable.subscribe({
                next(data) {
                    console.log(data);
                    this.userModel = data;
                },
                complete() {
                    console.log('Finished sequence');
                }
            });
        }
    }

    ngOnDestroy() {
        this._registerService.sharedUserObservable.unsubscribe();
    }

}
