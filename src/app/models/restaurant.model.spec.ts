import { Restaurant } from './restaurant.model';

describe('Restaurant', () => {
  it('should create an instance', () => {
    expect(new Restaurant("Test", 4, "Palm Beach", "This is a test instance of a restaurant")).toBeTruthy();
  });
});
