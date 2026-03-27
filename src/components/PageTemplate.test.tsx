import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PageTemplate from '@/components/PageTemplate';

describe('PageTemplate Component', () => {
  it('renders title correctly', () => {
    render(
      <PageTemplate title="Test Title" theme="professional">
        <div>Content</div>
      </PageTemplate>
    );
    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
  });

  it('renders sub-page links when provided', () => {
    const subPages = [
      { name: 'Sub 1', href: '/sub1' },
      { name: 'Sub 2', href: '/sub2' },
    ];
    render(
      <PageTemplate title="Test" theme="professional" subPages={subPages}>
        <div>Content</div>
      </PageTemplate>
    );
    expect(screen.getByText('Sub 1')).toHaveAttribute('href', '/sub1');
    expect(screen.getByText('Sub 2')).toHaveAttribute('href', '/sub2');
  });

  it('applies themed styles for "professional"', () => {
    const { container } = render(
      <PageTemplate title="Test" theme="professional">
        <div>Content</div>
      </PageTemplate>
    );
    // Check if the container or a key element has professional theme-related classes
    expect(container.firstChild).toHaveClass('theme-professional');
  });

  it('applies themed styles for "romantic"', () => {
    const { container } = render(
      <PageTemplate title="Test" theme="romantic">
        <div>Content</div>
      </PageTemplate>
    );
    expect(container.firstChild).toHaveClass('theme-romantic');
  });
});
