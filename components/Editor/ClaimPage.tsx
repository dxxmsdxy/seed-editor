"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/hooks';
import { setOTCMode, setOTCAddress } from '@/store/slices/otcSlice';

const ClaimPage = ({ params }: { params: { id: string } }) => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const validateAddress = (address: string) => {
    // This is a basic regex for Taproot addresses. You might want to use a more robust validation method.
    const taprootRegex = /^(bc1p)[a-zA-HJ-NP-Z0-9]{58,103}$/;
    return taprootRegex.test(address);
  };

  const handleSubmit = () => {
    if (validateAddress(address)) {
      dispatch(setOTCMode(true));
      dispatch(setOTCAddress(address));
      router.push(`/?claim=${params.id}`);
    } else {
      setError('Invalid Bitcoin taproot address');
    }
  };

  return (
    <div className="claim-container">
      <h1>Claim Your Inscription</h1>
      <p>Paste your ordinal address below:</p>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Bitcoin taproot address"
      />
      {error && <p className="error">{error}</p>}
      <button
        onClick={handleSubmit}
        className={`confirm-button ${!validateAddress(address) ? 'disabled' : ''}`}
        disabled={!validateAddress(address)}
      >
        Confirm
      </button>
    </div>
  );
};

export default ClaimPage;