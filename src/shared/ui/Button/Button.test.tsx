import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.BACKGROUND}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('background');
        screen.debug();
    });
});
