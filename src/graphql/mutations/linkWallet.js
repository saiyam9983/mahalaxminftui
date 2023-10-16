import { gql } from "@apollo/client";

export const linkUserWallet = gql`
  mutation LinkWallet($walletAddress: String, $userId: String) {
    linkWallet(walletAddress: $walletAddress, userId: $userId) {
      user {
        wallets {
          _id
          address
          isPrimary
          user {
            username
          }
        }
      }
    }
  }
`;
