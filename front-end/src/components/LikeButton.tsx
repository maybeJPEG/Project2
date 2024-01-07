import React, { useState } from 'react';

interface LikeButtonProps {
    isbn: string;
    initialLikes: number;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isbn, initialLikes }) => {
    const [likes, setLikes] = useState<number>(initialLikes);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    return (
        <div>
            <button onClick={handleLike}>Like ({likes})</button>
        </div>
    );
};

