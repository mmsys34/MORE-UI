import { useState } from 'react';

import { usePolling } from './usePolling';

export interface AddressAllowedResult {
  isAllowed: boolean;
}

const TWO_MINUTES = 2 * 60 * 1000;

export const useAddressAllowed = (address: string): AddressAllowedResult => {
  const [isAllowed, setIsAllowed] = useState(true);

  const getIsAddressAllowed = async () => {
    // if (screeningUrl && address) {
    //   try {
    //     const response = await fetch(screeningUrl + queryParams);
    //     if (response.ok) {
    //       const data: { addressAllowed: boolean } = await response.json();
    //       setIsAllowed(data.addressAllowed);
    //     }
    //   } catch (e) {}
    // } else {
    //   setIsAllowed(true);
    // }

    setIsAllowed(true);
  };

  usePolling(getIsAddressAllowed, TWO_MINUTES, false, [address]);

  return {
    isAllowed,
  };
};
