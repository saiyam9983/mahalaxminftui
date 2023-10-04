import { gql } from "@apollo/client";

export const Signup = gql`
mutation SignUp($displayName: String, $username: String, $aboutDetails: String, $twitterUrl: String, $facebookUrl: String, $instagramUrl: String, $walletAddress: String) {
    signUp(displayName: $displayName, username: $username, about_details: $aboutDetails, twitterUrl: $twitterUrl, facebookUrl: $facebookUrl, instagramUrl: $instagramUrl, walletAddress: $walletAddress) {
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
        
      }
    }
  }
`;
