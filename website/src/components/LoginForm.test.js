import "@testing-library/jest-dom/extend-expect"
import { render } from '@testing-library/react';
import React from "react";
import LoginForm from "./LoginForm"

describe("Login form check", () => {
  test('Login form check ', () => {
    const { getByTestId } = render(<LoginForm />);
    const password = getByTestId('testLoginForm');
    expect(password.value).toBe("")
  });
});





