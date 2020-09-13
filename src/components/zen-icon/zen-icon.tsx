import { Component, Host, h, Prop } from '@stencil/core';
import feather from 'feather-icons';

type IconDimensions = {
  width: number;
  height: number;
}

@Component({
  tag: 'zen-icon',
  styleUrl: 'zen-icon.css',
})
export class ZenIcon {

  @Prop() icon: string;
  @Prop() color: string = "black";
  @Prop() size: string = "md";


  static _ICON_DIMENSION_MAP = {
    'sm': {
      width: 12,
      height: 12
    },
    'md': {
      width: 24,
      height: 24
    },
    'lg': {
      width: 36,
      height: 36
    },
    'xl': {
      width: 48,
      height: 48
    }
  };


  render() {
    return (
      <Host class="zen-icon" innerHTML={this.getIcon(this.icon, this.color, this.size)}>
      </Host>
    );
  }
  getIcon(iconName: string, color: string, size: string) {
    var { width, height } = ZenIcon.getSize(size);
    var icon = feather.icons[iconName];
    if (icon) {
      return icon.toSvg({ width, height, color });
    }
    console.warn(`icon: ${iconName}, wasn't found`);
    return '';
  }
  static getSize(size: string): IconDimensions {
    switch (size) {
      case 'sm':
      case 'small':
        return ZenIcon._ICON_DIMENSION_MAP['sm'];
      case 'lg':
      case 'large':
        return ZenIcon._ICON_DIMENSION_MAP['lg'];
      case 'xl':
        return ZenIcon._ICON_DIMENSION_MAP['xl'];
      default:
        return ZenIcon._ICON_DIMENSION_MAP['md'];
    }
  }
}

