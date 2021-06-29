import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function ColoniesPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    //GETs colonies stored locally
    const colonyReducer = useSelector(store => store.colonyReducer);
    //GETS user info stored locally
    const userReducer = useSelector(store => store.userReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);

    const handleAddColony = () =>{
        console.log('Add colony button clicked')
        history.push('/addColony')
    }

    const handleDelete = (colony) =>{
        console.log('Colony to be deleted', colony)
        dispatch({type: 'REMOVE_COLONIES',
                payload: colony})
    }

    const handleEdit = (colony) => {
        console.log('Colony to be updated is', colony);
        dispatch({type:'EDIT_COLONY', payload: colony})
        history.push('/editColonyForm');

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
                    {colonyReducer.map(colony => {
                        return (
                            <tr key = {colony.id}>
                                <td>{colony.name}</td>
                                <td>Number of Birds</td>
                                <td><button onClick={() => handleEdit(colony)}>Edit</button></td>
                                <td><button onClick={() => handleDelete(colony)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <button onClick={handleAddColony}>Add Colony</button>
        </div>
    )
}
