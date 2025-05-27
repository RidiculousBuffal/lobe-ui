import type { MermaidConfig } from 'mermaid/dist/config.type';
import type { ReactNode, Ref } from 'react';

import type { ActionIconProps } from '@/ActionIcon';
import type { DivProps } from '@/types';

export interface SyntaxMermaidProps {
  children: string;
  enableNonPreviewWheelZoom?: MermaidProps['enableNonPreviewWheelZoom'];
  enablePanZoom?: MermaidProps['enablePanZoom'];
  onBlobUrlChange?: (blobUrl: string) => void;
  ref?: Ref<HTMLDivElement>;
  theme?: MermaidProps['theme'];
  variant?: MermaidProps['variant']; // 新增
}

export interface MermaidProps extends DivProps {
  actionIconSize?: ActionIconProps['size'];
  actionsRender?: (props: {
    actionIconSize: ActionIconProps['size'];
    content: string;
    originalNode: ReactNode;
  }) => ReactNode;
  bodyRender?: (props: { content: string; originalNode: ReactNode }) => ReactNode;
  children: string;
  copyable?: boolean;
  defaultExpand?: boolean;
  downloadFileName?: string;
  downloadFileType?: string;
  downloadable?: boolean;
  enableNonPreviewWheelZoom?: boolean;
  enablePanZoom?: boolean;
  fileName?: string;
  fullFeatured?: boolean;
  language?: string;
  shadow?: boolean;
  showLanguage?: boolean;
  theme?: 'lobe-theme' | MermaidConfig['theme'];
  variant?: 'filled' | 'outlined' | 'borderless';
}
