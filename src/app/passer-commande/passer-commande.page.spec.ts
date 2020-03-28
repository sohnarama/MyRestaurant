import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasserCommandePage } from './passer-commande.page';

describe('PasserCommandePage', () => {
  let component: PasserCommandePage;
  let fixture: ComponentFixture<PasserCommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasserCommandePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasserCommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
