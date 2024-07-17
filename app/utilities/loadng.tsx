// components/Loading.tsx
import React from 'react';
import { useLottie } from 'lottie-react';
import loadingAnimation from '@/public/loading.json'; 


const Loading: React.FC = () => {
    const options = {
        animationData: loadingAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div className="loading-container">
            {View}
        
        </div>
    );
}

export default Loading;
