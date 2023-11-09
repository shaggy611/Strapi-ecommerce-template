import type { Schema, Attribute } from '@strapi/strapi';

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    href: Attribute.String;
  };
}

export interface UiLinkList extends Schema.Component {
  collectionName: 'components_ui_link_lists';
  info: {
    displayName: 'LinkList';
  };
  attributes: {
    link: Attribute.Component<'ui.link', true>;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.button': UiButton;
      'ui.link-list': UiLinkList;
      'ui.link': UiLink;
    }
  }
}
