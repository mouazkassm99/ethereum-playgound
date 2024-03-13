import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import { DataDisplayer } from "..";
import { formatEther, parseEther } from 'ethers';

test('data displayer with error', async () => {

    render(<DataDisplayer data={undefined} isError={true} isLoading={false} />);

    const foundErrorElement = await screen.findByText(/there was an error/i);

    expect(foundErrorElement).toBeInTheDocument();
});


test('data displayer with loading', async () => {

    render(<DataDisplayer data={undefined} isError={false} isLoading={true} />);

    const foundLoadingElement = await screen.findByText(/loading.../i);

    expect(foundLoadingElement).toBeInTheDocument();
});

test('data displayer with data', async () => {

    const etherData = parseEther('1');

    render(<DataDisplayer data={etherData} isError={false} isLoading={false} />);

    const formattedData = formatEther(etherData);

    const foundDataElement = await screen.findByText(formattedData);

    expect(foundDataElement).toBeInTheDocument();
});