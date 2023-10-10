import { useMemo } from "react";

const usePinataGatewayUrl = (ipfsHash) => {
  const pinataGatewayUrl = useMemo(() => {
    if (ipfsHash) {
      return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
    }
    return null;
  }, [ipfsHash]);

  return pinataGatewayUrl;
};

export default usePinataGatewayUrl;
