import '../__mocks__/mockMedia';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import  Login from '../login';

test('should load login form with login button disabled', () => {
    render(<Login />);

    expect(screen.getByRole("button", {name: /login/i})).toBeDisabled();
})