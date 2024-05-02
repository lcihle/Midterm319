import React from 'react';

function MyComponent() {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div>
            <h1>My React Page</h1>
            <p>This is my React page content.</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default MyComponent;
