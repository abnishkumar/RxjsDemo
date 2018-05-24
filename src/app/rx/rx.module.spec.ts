import { RxModule } from './rx.module';

describe('RxModule', () => {
  let rxModule: RxModule;

  beforeEach(() => {
    rxModule = new RxModule();
  });

  it('should create an instance', () => {
    expect(rxModule).toBeTruthy();
  });
});
