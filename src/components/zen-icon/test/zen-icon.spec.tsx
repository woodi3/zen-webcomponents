import { getSize, ICON_DIMENSION_MAP } from '../zen-icon';

describe('zen-icon', () => {
  it('returns proper dimension', () => {
    expect(getSize('sm')).toStrictEqual(ICON_DIMENSION_MAP['sm']);
  });
});
