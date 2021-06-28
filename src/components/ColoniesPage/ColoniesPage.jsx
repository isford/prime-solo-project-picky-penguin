import React from 'react'
import { useHistory } from 'react-router';

export default function ColoniesPage() {
    const history = useHistory();

    function handleAddColony(){
        console.log('Add colony button clicked')
        history.push('/addColony')
    }
    return (
        <div>
            <p>You are on the colonies page</p>

            <table>
                <thead>
                    <tr>
                        <th>Colony Name</th>
                        <th>Number of Birds</th>
                        <th>Edit Colony Name</th>
                        <th>Delete Colony</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Breeding Adults</td>
                        <td>22</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            </table>

            <button onClick={handleAddColony}>Add Colony</button>
        </div>
    )
}
