function useTruncateWalletAddress(walletAddress) {
  const truncateAddress = (address) => {
    if (!address) return "Please Connect Wallet";

    const prefix = address.slice(0, 4);
    const suffix = address.slice(-4);

    return `${prefix}.....${suffix}`;
  };

  return truncateAddress(walletAddress);
}

export default useTruncateWalletAddress;

export const truncateAddress = (address) => {
  if (!address) return "Please Connect Wallet";

  const prefix = address.slice(0, 4);
  const suffix = address.slice(-4);

  return `${prefix}.....${suffix}`;
};
