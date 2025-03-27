// types.ts
export type DropdownSize = 'default' | 'half';
export type DropdownState = 'placeholder' | 'default' | 'hover' | 'focused' | 'disabled' | 'filled' | 'open';
export type DropdownType = 'default' | 'icon-leading' | 'avatar-leading' | 'search' | 'destructive';
export type MenuItemType = 'default' | 'name' | 'mode' | 'others' | 'input-field' | 'leading-dropdown' | 'trailing-dropdown';

export type MenuItemStyleConfig = {
  showAvatar?: boolean;
  showIcon?: boolean;
  showStatus?: boolean;
  showCheck?: boolean;
  twoLine?: boolean;
};