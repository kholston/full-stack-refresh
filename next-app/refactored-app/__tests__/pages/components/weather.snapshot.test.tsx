/**
 * @jest-environment jsdom
 */

import {fireEvent, render, screen} from '@testing-library/react'
import PageComponentWeather from '../../../src/pages/components/weather';

describe("PageComponentWeather", () => {
    test('renders correctly', async () => {
        const { container } = render(<PageComponentWeather></PageComponentWeather>)
        expect(container).toMatchSnapshot();
    })

    test('clicks the h1 element and updates the state', async () => {
        const { container } = render(<PageComponentWeather></PageComponentWeather>)

        const header = await screen.findByRole('heading', {level: 1})
        fireEvent.click(header)

        expect(container).toMatchSnapshot();
    })
})
