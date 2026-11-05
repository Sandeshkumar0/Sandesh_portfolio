import { useEffect, useState } from 'react';

export type DeviceTier = 'high' | 'medium' | 'low';

const getDeviceTier = (): DeviceTier => {
  const connection = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const saveData = connection.connection?.saveData === true;
  const lowMemory = (connection.deviceMemory ?? 8) <= 4;
  const lowConcurrency = navigator.hardwareConcurrency <= 4;

  if (reducedMotion || coarsePointer || saveData || lowMemory || lowConcurrency) {
    return 'low';
  }

  if (navigator.hardwareConcurrency >= 8 && (connection.deviceMemory ?? 8) >= 8) {
    return 'high';
  }

  return 'medium';
};

export const useDeviceTier = (): DeviceTier => {
  const [tier, setTier] = useState<DeviceTier>('medium');

  useEffect(() => {
    const timer = window.setTimeout(() => setTier(getDeviceTier()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return tier;
};
