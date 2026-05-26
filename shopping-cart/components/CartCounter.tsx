"use client";
import { useAppSelector } from "@/store";
import {
  addOne,
  initCouterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

// los server components solo se renderizan 1 vez, no se re-renderiza
export const CartCounter = ({ value = 0 }: Props) => {
  //al usar redux (useAppSelector, useDispatch) se necesita 'use client'
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // opt1: para obtener desde el valor desde el store de redux toolkit
  // useEffect(() => {
  //     dispatch(initCouterState(value));
  // }, [dispatch, value]);

  // opt2: usar useState en lugar de Redux para tener un estado local
  // const [count, setCount] = useState(value); // useState necesita 'use client';

  // opt3: obtener el count desde una api
  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCouterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl"> {count} </span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          + 1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          - 1
        </button>
      </div>
    </>
  );
};
