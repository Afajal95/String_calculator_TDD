import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect } from 'vitest';
import StringCalculator from "../components/stringCalcUI";

describe("StringCalculator Component", () => {
    test("renders the initial UI correctly", () => {
        render(<StringCalculator />);
        expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
        expect(screen.getByText(/Calculate/i)).toBeInTheDocument();
    });

    test("calculates the sum of numbers separated by commas", async () => {
        render(<StringCalculator />);
        const inputField = screen.getByPlaceholderText(/Enter numbers/i);
        const calculateButton = screen.getByText(/Calculate/i);

        fireEvent.change(inputField, { target: { value: "1,2,3" } });
        fireEvent.click(calculateButton);
        // Wait for the result element to appear
        await waitFor(() => screen.getByText(/Result:/i));

        // Check if the result has been rendered correctly
        expect(screen.getByText('6')).toBeInTheDocument();
    });

    test("handles empty input and returns 0", async () => {
        render(<StringCalculator />);
        const calculateButton = screen.getByText(/Calculate/i);

        fireEvent.click(calculateButton);

        // Wait for the result element to appear
        await waitFor(() => screen.getByText(/Result:/i));

        // Check if the result has been rendered correctly
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    test("calculates the sum of numbers separated by newlines", async () => {
        render(<StringCalculator />);
        const inputField = screen.getByPlaceholderText(/Enter numbers/i);
        const calculateButton = screen.getByText(/Calculate/i);

        fireEvent.change(inputField, { target: { value: "1,2,3" } });
        fireEvent.click(calculateButton);

        // Wait for the result element to appear
        await waitFor(() => screen.getByText(/Result:/i));

        // Check if the result has been rendered correctly
        expect(screen.getByText('6')).toBeInTheDocument();
    });


    test("displays an error for negative numbers", async () => {
        render(<StringCalculator />);
        const inputField = screen.getByPlaceholderText(/Enter numbers/i);
        const calculateButton = screen.getByText(/Calculate/i);

        fireEvent.change(inputField, { target: { value: "1,-2,-3" } });
        fireEvent.click(calculateButton);



        // Wait for the result element to appear
        await waitFor(() => screen.getByText(/Result:/i));

        // Check if the result has been rendered correctly
        expect(
            screen.getByText(/negative numbers not allowed: -2, -3/i)
        ).toBeInTheDocument();
    });

    test("ignores invalid numbers in the input", async () => {
        render(<StringCalculator />);
        const inputField = screen.getByPlaceholderText(/Enter numbers/i);
        const calculateButton = screen.getByText(/Calculate/i);

        fireEvent.change(inputField, { target: { value: "1,abc,3" } });
        fireEvent.click(calculateButton);

        // Wait for the result element to appear
        await waitFor(() => screen.getByText(/Result:/i));

        // Check if the result has been rendered correctly
        expect(screen.getByText('4')).toBeInTheDocument();
    });

    test("focuses on the input field when page loads", () => {
        render(<StringCalculator />);
        const inputField = screen.getByPlaceholderText(/Enter numbers/i);
        expect(inputField).toHaveFocus();
    });
});
