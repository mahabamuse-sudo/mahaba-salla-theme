import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * The storefront is a catalogue, not a publication. Any old blog URL returns to
 * the home page instead of rendering the engine's journal.
 */
export const Route = createFileRoute('/{-$locale}/blog')({
  beforeLoad: () => {
    throw redirect({ to: '/', replace: true });
  },
});
