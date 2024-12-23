import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to JobViet</h1>
            <p>Your one-stop solution for job seeking and recruitment.</p>
            <button 
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                onClick={() => alert('Explore Jobs')}
            >
                Explore Jobs
            </button>
        </div>
    );
};

export default Home;