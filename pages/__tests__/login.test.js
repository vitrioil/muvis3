import '../__mocks__/mockMedia';
import '../__mocks__/ResizeObserver';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import  Login from '../login';

test('should load login form with login button disabled', async () => {
    render(<Login />);

    expect(await screen.findByRole("button", {name: /login/i})).toBeDisabled();
})

test('should enabled the button on user input', async () => {
    render(<Login />);

    // enter credentials
    userEvent.type(screen.getByLabelText(/email/i), "test@test.com");
    userEvent.type(screen.getByLabelText(/password/i), "password");

    // button becomes enabled
    expect(await screen.findByRole("button", {name: /login/i})).toBeEnabled();
})

test('should switch to register', async () => {
    render(<Login />)

    expect(await screen.findByRole("button", {name: /register/i})).toBeEnabled();

    // switch to register form
    userEvent.click(await screen.findByRole('button', {name: /register/i}))
    expect(await screen.findByRole("button", {name: /register/i})).toBeDisabled();

    // enter register credentials
    userEvent.type(screen.getByLabelText(/email/i), "test@test.com");
    userEvent.type(screen.getByLabelText(/^password/i), "password");
    userEvent.type(screen.getByLabelText(/confirm password/i), "password");

    // button becomes enabled
    expect(await screen.findByRole("button", {name: /register/i})).toBeEnabled();
})
