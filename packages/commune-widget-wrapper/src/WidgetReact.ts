import React from 'react';
import { createComponent } from '@lit/react';
import { CommuneWidget } from 'commune-widget-core';

export const CommuneWidgetWrapper = createComponent<CommuneWidget>({
  tagName: 'commune-widget',
  elementClass: CommuneWidget,
  react: React
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'commune-widget': CommuneWidget;
    }
  }
}
