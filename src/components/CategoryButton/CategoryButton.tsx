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
  onClick: () => void;
}
export default function CategoryButton({
  children,
  type,
  onClick,
}: CategoryButtonProps) {
  const buttonClasses = classNames(styles.button_styles, {
    [styles.inactive]: type === ButtonType.inactive,
  });

  return (
    <button onClick={onClick} className={buttonClasses}>
      {' '}
      {children}
    </button>
  );
}
