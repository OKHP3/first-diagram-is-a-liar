import type { ReactNode } from 'react';

type GuideStepProps = {
  id: string;
  testId: string;
  children: ReactNode;
  className?: string;
};

export function GuideStep({ id, testId, children, className = '' }: GuideStepProps) {
  return (
    <section id={id} className={`section-rule scroll-mt-8 py-24 lg:py-32 ${className}`} data-testid={testId}>
      {children}
    </section>
  );
}