import React from 'react';
import { useHistory } from 'react-router';

export default function FeedingPage() {
    const history = useHistory();

    const handleFeed = () => {
        console.log('Feed data submitted');
        history.push('/addFeedingSuccess')
    }

    return (
        <div>
            <p>You are on the Feeding Page</p>
            <button onClick = {handleFeed}>Submit Feed</button>
        </div>
    )
}
