import { useState, useEffect, useCallback, useRef } from 'react';
import Time from '../Utils/Time';

interface TimerProps {expiredAt?: number, onExpire: ()=>void, immediate?: boolean}

export const useTimer = ({ expiredAt, onExpire, immediate = false }:TimerProps) => {
    const [seconds, setSeconds] = useState<number|null>(null);
    const intervalRef = useRef();
    useEffect(() => {
        if (seconds) {
            // @ts-ignore
            intervalRef.current = setInterval(() => {
                setSeconds(seconds - 1);
            }, 950);
            return () => clearInterval(intervalRef.current);
        }
    }, [seconds, intervalRef]);

    useEffect(() => {
        if (expiredAt && immediate)
            setSeconds(Time.getSecondsFromExpiry(expiredAt));
    }, [expiredAt, immediate]);

    const start = useCallback((time: number) => {
        if (time) setSeconds(Time.getSecondsFromExpiry(Date.now() + 1000*time));
    }, []);

    const stop = useCallback(() => {
        clearInterval(intervalRef.current);
    }, []);

    const onExpireExecute = useCallback(() => onExpire(), [onExpire]);

    useEffect(() => {
        if (seconds !== null && seconds <= 0) {
            clearInterval(intervalRef.current);
            setSeconds(null);
            onExpireExecute && onExpireExecute();
        }
    }, [seconds, onExpireExecute]);

    return {
        ...Time.getTimeFromSeconds(seconds as number),
        start,
        stop
    };
}