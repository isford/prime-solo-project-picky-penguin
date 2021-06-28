import React from 'react';
import { useHistory } from 'react-router';
import './FeedingPage.css'

export default function FeedingPage() {
    const history = useHistory();

    const handleFeed = () => {
        console.log('Feed data submitted');
        history.push('/addFeedingSuccess')
    }

    return (
        <div>
            <p>You are on the Feeding Page</p>

            <table class = "feeding-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Colony</th>
                    <th>Fish Count</th>
                    <th>Calcium</th>
                    <th>Multivitamin</th>
                    <th>Itraconazole</th>
                    <th>Increase Fish</th>
                    <th>Decrease Fish</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nadine</td>
                    <td>Breeders</td>
                    <td>16</td>
                    <td>Fed</td>
                    <td>Not Fed</td>
                    <td>Not Fed</td>
                    <td><button>+</button></td>
                    <td><button>-</button></td>
                </tr>
                </tbody>
            </table>

            <button onClick = {handleFeed}>Submit Feed</button>
        </div>
    )
}
