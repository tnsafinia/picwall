// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { getByRole, getByTestId } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import Main from './Components/Main';

test('handles disabled button', () => {
    //to check whether an element is disabled from the user's perspective
    render(<Main />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).not.toBeDisabled();
})

test('render search button', () => {
    render(<Main />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
})

test('render input', () => {
    render(<Main />);
    const inputGroupElement = screen.getByTestId("not-empty");
    expect(inputGroupElement).toBeInTheDocument();
})

test('handles not empty input', () => {
    render(<Main />);
    const inputGroupElement = screen.getByTestId("not-empty");
    expect(inputGroupElement).not.toBeEmptyDOMElement();
    //to assert whether search bar input has content or not
})