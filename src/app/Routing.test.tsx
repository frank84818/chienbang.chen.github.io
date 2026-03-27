import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from '@/app/page';
import CVPage from '@/app/cv/page';
import WeddingPage from '@/app/wedding/page';

describe('Core Routing Pages', () => {
  it('renders Home page correctly', () => {
    render(<Page />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Everything/i);
  });

  it('renders CV page correctly', () => {
    render(<CVPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Curriculum Vitae/i);
  });

  it('renders Wedding page correctly', () => {
    render(<WeddingPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Save the Date/i);
  });
});
