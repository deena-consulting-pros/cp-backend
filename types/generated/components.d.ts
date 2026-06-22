import type { Schema, Struct } from '@strapi/strapi';

export interface AboutExpertCard extends Struct.ComponentSchema {
  collectionName: 'components_about_expert_cards';
  info: {
    displayName: 'Expert Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Schema.Attribute.Integer;
    role: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPillarCard extends Struct.ComponentSchema {
  collectionName: 'components_about_pillar_cards';
  info: {
    displayName: 'Pillar Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['large_dark', 'tall_green', 'small_light', 'small_white']
    >;
  };
}

export interface HomeChip extends Struct.ComponentSchema {
  collectionName: 'components_home_chips';
  info: {
    displayName: 'Chip';
  };
  attributes: {
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    label: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
  };
}

export interface HomeFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    order: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_home_process_steps';
  info: {
    displayName: 'Process Step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    order: Schema.Attribute.Integer;
    stepNumber: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyrightText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    legalLinks: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quickLinks: Schema.Attribute.Component<'shared.link', true>;
    serviceLinks: Schema.Attribute.Component<'shared.link', true>;
    siteName: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
  };
}

export interface SectionContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_section_contact_form_sections';
  info: {
    displayName: 'contact-form-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    helperText: Schema.Attribute.String;
    submitButtonLabel: Schema.Attribute.String;
  };
}

export interface SectionServiceCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_service_cta_sections';
  info: {
    displayName: 'Service CTA Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    isEnabled: Schema.Attribute.Boolean;
    primaryButtonLabel: Schema.Attribute.String;
    primaryButtonUrl: Schema.Attribute.String;
    secondaryButtonLabel: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['navy', 'green', 'light']>;
  };
}

export interface ServicesConnectedPoint extends Struct.ComponentSchema {
  collectionName: 'components_services_connected_points';
  info: {
    displayName: 'Connected Point';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesConnectedSolutions extends Struct.ComponentSchema {
  collectionName: 'components_services_connected_solutions';
  info: {
    displayName: 'Connected Solutions';
  };
  attributes: {
    centerLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    orbitItems: Schema.Attribute.Component<'shared.features-text', true>;
    points: Schema.Attribute.Component<'services.connected-point', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPartnershipStage extends Struct.ComponentSchema {
  collectionName: 'components_services_partnership_stages';
  info: {
    displayName: 'Partnership Stage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.features-text', true>;
    isRecommended: Schema.Attribute.Boolean;
    order: Schema.Attribute.Integer;
    partnershipStageBtn: Schema.Attribute.Component<'shared.link', false>;
    recommendedLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServiceDetails extends Struct.ComponentSchema {
  collectionName: 'components_services_service_details';
  info: {
    displayName: 'Service Details';
  };
  attributes: {
    benefitsDescription: Schema.Attribute.Text;
    benefitsEyebrow: Schema.Attribute.String;
    benefitsTitle: Schema.Attribute.String;
    checkListItem: Schema.Attribute.Component<'shared.text-pill', true>;
    detailCard: Schema.Attribute.Component<'shared.info-card', true>;
    faqHeading: Schema.Attribute.Component<'shared.section-heading', false>;
    faqSection: Schema.Attribute.Component<'shared.faq-section', true>;
    includedDescription: Schema.Attribute.Text;
    includedEyebrow: Schema.Attribute.String;
    includedTitle: Schema.Attribute.String;
    overviewChecklistTitle: Schema.Attribute.String;
    overviewDescription: Schema.Attribute.Text;
    overviewEyebrow: Schema.Attribute.String;
    overviewRichDescriptionText: Schema.Attribute.Blocks;
    overviewTitle: Schema.Attribute.String;
    processDescription: Schema.Attribute.Text;
    processEyebrow: Schema.Attribute.String;
    processSteps: Schema.Attribute.Component<'home.process-step', true>;
    processTitle: Schema.Attribute.String;
    textPill: Schema.Attribute.Component<'shared.text-pill', true>;
    visualItem: Schema.Attribute.Component<'shared.visual-item', true>;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    addressCountry: Schema.Attribute.String;
    addressLocality: Schema.Attribute.String;
    addressRegion: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    streetAddress: Schema.Attribute.String;
  };
}

export interface SharedCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_blocks';
  info: {
    displayName: 'CTA Block';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light', 'gradient']>;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedFeaturesText extends Struct.ComponentSchema {
  collectionName: 'components_shared_features_texts';
  info: {
    displayName: 'Features Text';
  };
  attributes: {
    features: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['Left', 'Center', 'Right']>;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    eyebrowText: Schema.Attribute.String;
    heroFloatingCard: Schema.Attribute.Component<
      'shared.hero-floating-card',
      true
    >;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    highlightText: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.link', false>;
    secondaryButton: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['simple', 'split', 'centered', 'dashboard', 'dark']
    >;
  };
}

export interface SharedHeroFloatingCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_floating_cards';
  info: {
    displayName: 'Hero Floating Card';
  };
  attributes: {
    cardType: Schema.Attribute.Enumeration<
      ['seo', 'ppc', 'analytics', 'website', 'growth', 'search']
    >;
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedIconKey extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_keys';
  info: {
    displayName: 'IconKey';
  };
  attributes: {
    iconKey: Schema.Attribute.Enumeration<
      [
        'seo',
        'ppc_marketing',
        'digital_marketing',
        'website_development',
        'web_design',
        'branding_strategy',
        'location',
        'analytics',
        'growth',
        'search',
        'target',
        'verified',
        'email',
        'route',
        'rocket',
        'message',
        'globe',
        'eye',
        'users',
        'shield',
        'settings',
        'briefcase',
        'layers',
        'zap',
        'clock',
        'check_circle',
      ]
    >;
  };
}

export interface SharedIconTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_text_items';
  info: {
    displayName: 'icon-text-item';
  };
  attributes: {
    description: Schema.Attribute.String;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_cards';
  info: {
    displayName: 'Info Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    ctaLink: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navLinks: Schema.Attribute.Component<'shared.link', true>;
    showCta: Schema.Attribute.Boolean;
    siteName: Schema.Attribute.String;
  };
}

export interface SharedOptionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_option_items';
  info: {
    displayName: 'option-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    highlightText: Schema.Attribute.String;
    label: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalPath: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    nofollow: Schema.Attribute.Boolean;
    noindex: Schema.Attribute.Boolean;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'linkedin',
        'instagram',
        'facebook',
        'x',
        'youtube',
        'whatsapp',
        'email',
        'website',
      ]
    >;
    newTab: Schema.Attribute.Boolean;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedStepCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_step_cards';
  info: {
    displayName: 'step-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
  };
}

export interface SharedTextPill extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_pills';
  info: {
    displayName: 'Text Pill';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedVisualItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_visual_items';
  info: {
    displayName: 'Visual Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Component<'shared.icon-key', false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.expert-card': AboutExpertCard;
      'about.pillar-card': AboutPillarCard;
      'home.chip': HomeChip;
      'home.feature-card': HomeFeatureCard;
      'home.process-step': HomeProcessStep;
      'layout.footer': LayoutFooter;
      'section.contact-form-section': SectionContactFormSection;
      'section.service-cta-section': SectionServiceCtaSection;
      'services.connected-point': ServicesConnectedPoint;
      'services.connected-solutions': ServicesConnectedSolutions;
      'services.partnership-stage': ServicesPartnershipStage;
      'services.service-details': ServicesServiceDetails;
      'shared.address': SharedAddress;
      'shared.cta-block': SharedCtaBlock;
      'shared.faq-section': SharedFaqSection;
      'shared.features-text': SharedFeaturesText;
      'shared.hero': SharedHero;
      'shared.hero-floating-card': SharedHeroFloatingCard;
      'shared.icon-key': SharedIconKey;
      'shared.icon-text-item': SharedIconTextItem;
      'shared.info-card': SharedInfoCard;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.navbar': SharedNavbar;
      'shared.option-item': SharedOptionItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-heading': SharedSectionHeading;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.step-card': SharedStepCard;
      'shared.text-block': SharedTextBlock;
      'shared.text-pill': SharedTextPill;
      'shared.visual-item': SharedVisualItem;
    }
  }
}
