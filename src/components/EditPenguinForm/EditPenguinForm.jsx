import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function EditPenguinForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const penguin = useSelector(store => store.editPenguinReducer);
    console.log(penguin);
    return (
        <div>
           <p>Edit penguin form</p> 
        </div>
    )
}
