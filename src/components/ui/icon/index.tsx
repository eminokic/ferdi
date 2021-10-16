import MdiIcon from '@mdi/react';
import classnames from 'classnames';
import { Component } from 'react';
import injectStyle from 'react-jss';

import { Theme } from '../../../themes';
import { IWithStyle } from '../typings/generic';

interface IProps extends IWithStyle {
  icon: string;
  size?: number;
  className?: string;
}

const styles = (theme: Theme) => ({
  icon: {
    fill: theme.colorText,
  },
});

class IconComponent extends Component<IProps> {
  public static defaultProps = {
    size: 1,
  };

  render() {
    const { classes, icon, size, className } = this.props;

    if (!icon) {
      console.warn('No Icon specified');
    }

    return (
      <MdiIcon
        path={icon}
        size={size}
        className={classnames({
          [classes.icon]: true,
          [`${className}`]: className,
        })}
      />
    );
  }
}

export const Icon = injectStyle(styles)(IconComponent);
