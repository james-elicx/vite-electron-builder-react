import { createRoot } from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import { afterEach, beforeEach, expect, test } from 'vitest';
import { ReactiveCounter } from '../src/components';

// Tell React that it's running in a unit test-like environment.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('ReactiveCounter component', () => {
  act(() => {
    createRoot(container).render(<ReactiveCounter />);
  });

  const button = container.querySelector('button') as HTMLButtonElement;

  expect(button.textContent).toBe('count is: 0');

  act(() => {
    Simulate.click(button);
  });

  expect(button.textContent).toBe('count is: 1');
});
