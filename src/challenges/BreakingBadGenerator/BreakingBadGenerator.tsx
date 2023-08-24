import React from "react";
import './BreakingBadGenerator.css';

const BreakingBadGenerator: React.FC = () => {
    return (
        <div className="Generator">
            <div className="Generator-logo">
                { /* Generated logo output */ }
            </div>

            <div className="row">
                <div className="col form-item">
                    <label htmlFor="firstLine">First Line</label>
                    <input id="firstLine" />
                </div>

                <div className="col form-item">
                    <label htmlFor="secondLine">Second Line</label>
                    <input id="secondLine" />
                </div>
            </div>
        </div>
    )
}

export default BreakingBadGenerator;