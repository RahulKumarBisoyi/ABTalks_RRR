import Container from '../common/Container';
import Button from '../common/Button';
import Reveal from '../common/Reveal';

export default function FinalCta() {
  return (
    <section className="relative border-t border-line pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-volt to-transparent opacity-60"
      />

      <Container className="flex flex-col items-start gap-6 sm:items-center sm:text-center">
        <Reveal className="flex flex-col items-start gap-6 sm:items-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Your next 60 days start here.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Build something every day. Ship your work. Become a stronger developer.
          </p>
          <Button to="/dashboard" variant="primary" size="lg" className="w-full sm:w-auto">
            Start Your Journey →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
