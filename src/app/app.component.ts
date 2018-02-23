import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { Random_String_N, RandomStringNFactory, GeneratorService } from './services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [
    { provide: Random_String_N, useFactory: RandomStringNFactory(50) }
  ]
})
export class AppComponent implements OnInit {
  title = 'Burger Shop';
  quantity: number;

  constructor(
    // registered on app.module
    @Optional() private configOptionService: ConfigOptionsService,
    // registered on app.module with useValue
    @Optional() private constService: ConstantsService,

    @Inject(Random_String_N) private stringGenerator: GeneratorService
  ) { }

  ngOnInit() {

    if (this.configOptionService) {
      this.configOptionService.saveConfigOption({
        id: 44,
        login: 'robot',
        email: 'robot@ecorp.org'
      });
    } else {
      console.log('ConfigOptionsService is not provided.');
    }

    if (this.constService) {
      console.log(
        this.constService.getConstObject()
      );
    }

    console.log('Random str1 = ' +
      this.stringGenerator.generate()
    );

    console.log('Random str2 = ' +
      this.stringGenerator.generate()
    );
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }
}
