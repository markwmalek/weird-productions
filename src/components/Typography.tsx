import React from 'react';
import './Typography.css';

/* ── WEIRD PRODUCTIONS — Typography design tokens ──
 * Single source of truth for font family, size, weight, and line-height.
 * Mirrors the scale already established in src/styles/global.css
 * (var(--font-caps) for headings, var(--font-body) for copy, etc).
 * Values here document the scale; Typography.css carries the same
 * numbers as real classes so page-specific CSS can still win the
 * cascade for bespoke/media-query overrides, exactly as it could before
 * this system existed.
 */

export type TypographyVariant =
  | 'display'
  | 'displaySm'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'eyebrow'
  | 'bodyLg'
  | 'body'
  | 'bodySm'
  | 'label'
  | 'caption'
  | 'script';

interface VariantToken {
  as: keyof JSX.IntrinsicElements;
  className: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: string;
  textTransform?: React.CSSProperties['textTransform'];
}

export const typeScale: Record<TypographyVariant, VariantToken> = {
  display: {
    as: 'h1',
    className: 'text-display',
    fontFamily: 'var(--font-caps)',
    fontSize: 'clamp(75px, 12.5vw, 188px)',
    fontWeight: 400,
    lineHeight: 0.9,
  },
  displaySm: {
    as: 'h2',
    className: 'text-display-sm',
    fontFamily: 'var(--font-display)',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: 1,
  },
  h1: {
    as: 'h1',
    className: 'text-h1',
    fontFamily: 'var(--font-caps)',
    fontSize: 'clamp(56px, 6.25vw, 100px)',
    fontWeight: 400,
    lineHeight: 0.9,
  },
  h2: {
    as: 'h2',
    className: 'text-h2',
    fontFamily: 'var(--font-caps)',
    fontSize: 'clamp(40px, 5vw, 75px)',
    fontWeight: 400,
    lineHeight: 0.95,
  },
  h3: {
    as: 'h3',
    className: 'text-h3',
    fontFamily: 'var(--font-caps)',
    fontSize: 'clamp(34px, 4.1vw, 50px)',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h4: {
    as: 'h4',
    className: 'text-h4',
    fontFamily: 'var(--font-caps)',
    fontSize: 'clamp(24px, 2.8vw, 34px)',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h5: {
    as: 'h5',
    className: 'text-h5',
    fontFamily: 'var(--font-caps)',
    fontSize: 'clamp(20px, 2vw, 24px)',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h6: {
    as: 'h6',
    className: 'text-h6',
    fontFamily: 'var(--font-caps)',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '0.04em',
  },
  eyebrow: {
    as: 'p',
    className: 'text-eyebrow',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '0.08em',
  },
  bodyLg: {
    as: 'p',
    className: 'text-body-lg',
    fontFamily: 'var(--font-body)',
    fontSize: 'clamp(16px, 1.6vw, 24px)',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body: {
    as: 'p',
    className: 'text-body',
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  bodySm: {
    as: 'p',
    className: 'text-body-sm',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  label: {
    as: 'span',
    className: 'text-label',
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '0.08em',
  },
  caption: {
    as: 'span',
    className: 'text-caption',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  script: {
    as: 'span',
    className: 'text-script',
    fontFamily: 'var(--font-script)',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: 1,
  },
};

type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends React.ElementType, Props> = Props &
  AsProp<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof (Props & AsProp<E>)>;

type TextOwnProps = {
  variant: TypographyVariant;
  children?: React.ReactNode;
  className?: string;
};

export type TextProps<E extends React.ElementType> = PolymorphicProps<E, TextOwnProps>;

type TextComponent = <E extends React.ElementType = 'span'>(
  props: TextProps<E>
) => React.ReactElement | null;

/**
 * Polymorphic typography component. Renders as the tag implied by `variant`
 * (e.g. h1, p, span) unless overridden via the `as` prop, and applies the
 * variant's font-family/size/weight/line-height via a shared class so every
 * page draws from the same scale instead of redeclaring it per className.
 * Page-specific classNames passed in still win the cascade for bespoke or
 * media-query-driven overrides, since they're appended after the variant
 * class in the bundle (same rule the codebase already followed).
 */
const TextImpl = React.forwardRef<HTMLElement, TextProps<React.ElementType>>(
  function Text({ as, variant, className, children, ...rest }, ref) {
    const token = typeScale[variant];
    const Component = (as || token.as) as React.ElementType;
    const combinedClassName = className ? `${token.className} ${className}` : token.className;

    return (
      <Component ref={ref} className={combinedClassName} {...rest}>
        {children}
      </Component>
    );
  }
);

export const Text = TextImpl as TextComponent;

export default Text;
