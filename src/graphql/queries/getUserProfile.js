import { gql } from "@apollo/client";

export const userProfile = gql`
  query User($walletAddress: String) {
    user(walletAddress: $walletAddress) {
      isPrimary
      address
      user {
        displayName
        bg_image
        avatar_url
        about_details
        facebookUrl
        instagramUrl
        isVerify
        twitterUrl
        userBadge
        username
      }
    }
  }
`;
