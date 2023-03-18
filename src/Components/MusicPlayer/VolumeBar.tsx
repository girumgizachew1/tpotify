import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

interface VolumeBarProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void; // Change the type to (value: number) => void
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const VolumeBar = ({ value, min, max, onChange, setVolume }: VolumeBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.currentTarget.value);
    onChange(newValue);
    setVolume(newValue);
  };

  return (
    <input type="range" value={value} min={min} max={max} step="any" onChange={handleChange} className='text-red-800' />
  );
};
export default VolumeBar