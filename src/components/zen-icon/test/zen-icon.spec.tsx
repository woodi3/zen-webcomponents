import { ZenIcon } from '../zen-icon';

describe('zen-icon', () => {
  it('returns proper dimension', () => {
    expect(ZenIcon.getSize('sm')).toStrictEqual(ZenIcon._ICON_DIMENSION_MAP['sm']);
  });
});
