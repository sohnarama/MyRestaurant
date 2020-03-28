import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfficherProfilPage } from './afficher-profil.page';

describe('AfficherProfilPage', () => {
  let component: AfficherProfilPage;
  let fixture: ComponentFixture<AfficherProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfficherProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
