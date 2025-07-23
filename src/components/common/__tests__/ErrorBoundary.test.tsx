import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';

import ErrorBoundary from '../ErrorBoundary';

const ErrorComponent = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders fallback UI on error', () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Custom fallback')).toBeInTheDocument();
  });

  it('renders children without error', () => {
    render(
      <ErrorBoundary fallback={<div>Error fallback</div>}>
        <div>Safe content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });
});
