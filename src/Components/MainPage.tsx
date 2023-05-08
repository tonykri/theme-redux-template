'use client';

import type { RootState } from '../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Redux/Features/counterSlice';
import { changeName } from '@/Redux/Features/nameSlice';

import ThemeBtn from "./ThemeBtn";

export default function MainPage() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const name = useSelector((state: RootState) => state.name.value);

    return (
        <div className="my-5">
            <ThemeBtn />
            <div className='flex-col flex w-1/2'>
                <span className='bg-red-400'>{count}</span>
                <button className='bg-green-200'
                    onClick={() => dispatch(increment())}>Increment</button>
                <button className='bg-green-400'
                    onClick={() => dispatch(decrement())}>Decrement</button>
                <button className='bg-green-600'
                    onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
            </div>
            <div className='flex-col flex w-1/2 mt-5'>
                <button className='bg-red-400'
                    onClick={() => dispatch(changeName('Tony'))}>changeName</button>
                <span className='bg-green-400'>{name}</span>
            </div>
        </div>
    )
}