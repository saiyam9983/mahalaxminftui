import { gql } from "@apollo/client";

export const createNft = gql`
  mutation createNft(
    $name: String
    $tokenId: String
    $url: String
    $imageUrl: String
    $chainId: Int
    $network: String
    $nftStatus: String
    $isAuction: Boolean
    $collectionAddress: String
    $creatorAddress: String
    $ownerAddress: String
    $price: Float
  ) {
    createNft(
      name: $name
      tokenId: $tokenId
      url: $url
      imageUrl: $imageUrl
      chainId: $chainId
      network: $network
      nftStatus: $nftStatus
      isAuction: $isAuction
      collectionAddress: $collectionAddress
      creatorAddress: $creatorAddress
      ownerAddress: $ownerAddress
      price: $price
    ) {
      _id
      name
      tokenId
      url
      chainId
      network
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
