import '../__mocks__/mockMedia';
import '../__mocks__/ResizeObserver';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import  Login from '../login';

test('should load login form with login button disabled', async () => {
    render(<Login />);

    expect(await screen.findByRole("button", {name: /login/i})).toBeDisabled();
})