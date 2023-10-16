import { useMutation } from "@apollo/client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { linkUserWallet } from "../graphql/mutations/linkWallet";

export default function WalletConnectModel({ open, setOpen, disconnect }) {
  const handleClose = () => setOpen(false);
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { address, isConnected } = useAccount();

  const [LinkWallet] = useMutation(linkUserWallet);
  useEffect(() => {
    if (isConnected) {
      LinkWallet({
        variables: {
          walletAddress: address,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isConnected]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {connectors.map((connector) => (
            <div className="p-3">
              <button
                className="w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}>
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </button>
            </div>
          ))}

          {error && <div>{error.message}</div>}
        </Box>
      </Modal>
    </div>
  );
}
