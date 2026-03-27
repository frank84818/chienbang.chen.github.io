import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Page from '@/app/page';

// Mock next/navigation if necessary
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Home Page Design (Next.js Style)', () => {
  it('renders the main hero heading with bold typography', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('font-black'); 
  });

  it('contains the CTA buttons/links', () => {
    render(<Page />);
    expect(screen.getByText(/Explore CV/i)).toBeInTheDocument();
    expect(screen.getByText(/Wedding Info/i)).toBeInTheDocument();
  });

  it('contains the descriptive cards', () => {
    render(<Page />);
    expect(screen.getByText(/Professional Path/i)).toBeInTheDocument();
    expect(screen.getByText(/Wedding Celebration/i)).toBeInTheDocument();
  });

  it('has responsive grid classes for the features section', () => {
    const { container } = render(<Page />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
  });
});
