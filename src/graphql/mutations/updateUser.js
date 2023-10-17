import { gql } from "@apollo/client";

export const updateUser = gql`
  mutation UpdateUser(
    $userId: String
    $displayName: String
    $username: String
    $avatarUrl: String
    $aboutDetails: String
    $bgImage: String
    $twitterUrl: String
    $facebookUrl: String
    $instagramUrl: String
    $isVerify: Boolean
  ) {
    updateUser(
      userId: $userId
      displayName: $displayName
      username: $username
      avatar_url: $avatarUrl
      about_details: $aboutDetails
      bg_image: $bgImage
      twitterUrl: $twitterUrl
      facebookUrl: $facebookUrl
      instagramUrl: $instagramUrl
      isVerify: $isVerify
    ) {
      _id
      displayName
      username
      avatar_url
      about_details
      bg_image
      twitterUrl
      facebookUrl
      instagramUrl
      isVerify
      userBadge
      wallets {
        address
      }
    }
  }
`;
