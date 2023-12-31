import { gql } from "@apollo/client";

export const Signup = gql`
  mutation SignUp(
    $aboutDetails: String
    $username: String
    $displayName: String
    $instagramUrl: String
    $walletAddress: String
    $twitterUrl: String
    $facebookUrl: String
  ) {
    signUp(
      about_details: $aboutDetails
      username: $username
      displayName: $displayName
      instagramUrl: $instagramUrl
      walletAddress: $walletAddress
      twitterUrl: $twitterUrl
      facebookUrl: $facebookUrl
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
        _id
        address
        isPrimary
      }
    }
  }
`;
