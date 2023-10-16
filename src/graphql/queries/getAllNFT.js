import { gql } from "@apollo/client";

export const allNFT = gql`
  query Nfts {
    nfts {
      _id
      name
      tokenId
      url
      chainId
      network
      lazyMint
      lazyMintData
      nftStatus
      collectionAddress
      creatorAddress
      ownerAddress
      imageUrl
      collections
      teams
      athlete
      musician
      artist
      isMarketPlace
      isAuction
      price
      supply
      mintedNft
      availableSupply
      isApproved
    }
  }
`;
