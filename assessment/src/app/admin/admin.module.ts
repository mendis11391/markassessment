import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AllquestionsComponent } from './questions/allquestions/allquestions.component';

@NgModule({
    declarations: [AllquestionsComponent],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
