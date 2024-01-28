import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavComponent } from './profile-nav.component';

describe('ProfileNavComponent', () => {
  let component: ProfileNavComponent;
  let fixture: ComponentFixture<ProfileNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
