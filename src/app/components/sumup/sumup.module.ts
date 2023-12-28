import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SumupComponent } from './sumup.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SumupRoutingModule } from './sumup-routing.module';
// Import other components from the folder

@NgModule({
    declarations: [
        SumupComponent,
        HeaderComponent,
        AboutComponent,
        CounterComponent,
        EventComponent,
        FeaturesComponent,
        TeamComponent,
        GalleryComponent,
        PricingComponent,
        ClientComponent,
        ContactComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,SumupRoutingModule
    ],
    exports: [
        SumupComponent,
    ]
})
export class SumupModule { }
