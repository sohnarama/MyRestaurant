import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfficherPlatPage } from './afficher-plat.page';

describe('AfficherPlatPage', () => {
  let component: AfficherPlatPage;
  let fixture: ComponentFixture<AfficherPlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPlatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfficherPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
