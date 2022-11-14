import { useContext } from 'react';
import { InfoContext } from '../context/InfoContext';

export const useInfo = () => useContext(InfoContext);
