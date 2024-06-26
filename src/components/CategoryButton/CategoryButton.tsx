import { ReactNode } from 'react';
import styles from './CategoryButton.module.scss';
import classNames from 'classnames';

export enum ButtonType {
  inactive = 'inactive',
  active = 'active',
}

interface CategoryButtonProps {
  children: ReactNode;
  type: ButtonType;
}
export default function CategoryButton({
  children,
  type,
}: CategoryButtonProps) {
  const buttonClasses = classNames(styles.button_styles, {
    [styles.inactive]: type === ButtonType.inactive,
  });

  return <button className={buttonClasses}> {children}</button>;
}
