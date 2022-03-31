import { createRoot } from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { ReactiveHash } from '../src/components';
import type { BinaryLike } from 'crypto';

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

/**
 * Mock expected global api exposed by {@link module:preload}
 */
(
  window as Window & typeof globalThis & { nodeCrypto: { sha256sum: (s: BinaryLike) => string } }
).nodeCrypto = {
  sha256sum: vi.fn((s: BinaryLike) => `${s}:HASHED`),
};

test('ReactiveHash component', () => {
  act(() => {
    createRoot(container).render(<ReactiveHash />);
  });

  const dataInput = container.querySelector('input:not([readonly])') as HTMLInputElement;
  const hashInput = container.querySelector('input[readonly]') as HTMLInputElement;

  expect(dataInput.value).toBe('HelloWorld');
  expect(hashInput.value).toBe('HelloWorld:HASHED');

  act(() => {
    dataInput.value = 'HelloAgainWorld';
    Simulate.change(dataInput);
    Simulate.keyDown(dataInput, { key: 'Enter', keyCode: 13, which: 13 });
  });

  expect(dataInput.value).toBe('HelloAgainWorld');
  expect(hashInput.value).toBe('HelloAgainWorld:HASHED');
});
