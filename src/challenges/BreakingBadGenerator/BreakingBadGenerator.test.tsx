import BreakingBadGenerator from "./BreakingBadGenerator";
import {render, screen} from "@testing-library/react";

describe('BreakingBadGenerator', () => {
    it('renders 2 inputs when initialized', () => {
        render(<BreakingBadGenerator />);

        expect(screen.getByLabelText(/first line/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/second line/i)).toBeInTheDocument();
    })
});