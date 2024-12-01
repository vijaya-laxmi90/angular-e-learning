import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AbouttComponent } from './aboutt/aboutt.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { RecordclassesComponent } from './recordclasses/recordclasses.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { PaymentComponent } from './payment/payment.component';
 import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { StartComponent } from './start/start.component';
import { TestnowComponent } from './testnow/testnow.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:HomeComponent,
        children:[
            {path:'about', component:AboutComponent },
            {path:'aboutt', component: AbouttComponent},
            { path: 'register', component:RegisterComponent },
            { path: 'courses', component:CoursesComponent },
            { path: 'assignment', component:AssignmentComponent },
            { path: 'recordclasses', component:RecordclassesComponent },
            { path: 'test', component:TestComponent },
            { path: 'payment', component:PaymentComponent },
            { path: 'list', component:ListComponent},
            { path: 'cart', component:CartComponent},
            { path: 'contact', component:ContactComponent },
            { path: 'confirmation', component:ConfirmationComponent },
            { path: 'start', component:StartComponent },
            { path: 'contactus', component:ContactusComponent },
            { path: 'testnow', component:TestnowComponent },

        ]
    },
    
  
];
