import { render, screen } from '@testing-library/react'

import Options from './Options'

test('Displays image for each scoop from the server', async () => {
    render(<Options optionType='scoops' />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(3);

    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop', 'Strawberry scoop']);
});

test('Displays image for each topping from the server', async () => {
    render(<Options optionType='toppings' />)

    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot Fudge topping']);
})