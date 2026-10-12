import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('Actions Lab learning platform', () => {
  it('shows the three learning cards and pipeline', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Good code. On repeat.' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /what is git\?/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /what is github\?/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /what is github actions\?/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /your pipeline, at a glance/i })).toBeInTheDocument();
  });

  it('opens a learning card with a useful detail', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /what is git\?/i }));
    expect(screen.getByText(/time machine for your project/i)).toBeInTheDocument();
  });

  it('can hide and restore the guides', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('help-toggle'));
    expect(screen.getByTestId('guides-hidden')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('help-toggle'));
    expect(screen.getByRole('button', { name: /what is git\?/i })).toBeInTheDocument();
  });
});
