import { ThemeService } from "./theme.service";
import { TestBed } from "@angular/core/testing";

describe("ThemeService", () => {

  let service: ThemeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService
      ]
    });
    service = TestBed.get(ThemeService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
