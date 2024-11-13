import { useEffect } from "react";
import { useWallet, WalletContextState } from "@suiet/wallet-kit";
import { ConnectButton, ErrorCode } from "@suiet/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import "@suiet/wallet-kit/style.css";
import { ADMIN, IDENTITY, PACKAGE_ID } from "@/scripts/constants";

export var setWallet: WalletContextState;

function WalletButton() {
	const wallet = useWallet();

	useEffect(() => {
		if (wallet.connected) {
			console.log("wallet connected")
			console.log("current wallet: ", wallet);
			setWallet = wallet;
		} else {
			console.log("wallet disconnected")
			// setWallet(null);
		}

	}, [wallet]);

	return (
		<ConnectButton 
		// The BaseError instance has properties like {code, message, details}
		// for developers to further customize their error handling.
		onConnectError={(err) => {
		    if (err.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
		        console.warn('user rejected the connection to ' + err.details?.wallet);
		    } else {
		        console.warn('unknown connect error: ', err);
		    }
		}}
		onConnectSuccess={(walletName) => {
			console.log('[Connection Success]: ', walletName);
		}}
		>
			Connect Your Wallet
		</ConnectButton>
	);
}


export const enter = async () => {
	const depositAmountInMist = 1000000000;
	const gasBudgetInMist = 100000000;

	const txb = new TransactionBlock();

	txb.setGasBudget(gasBudgetInMist);
	const [coin] = txb.splitCoins(txb.gas, [txb.pure(depositAmountInMist)]);

	txb.moveCall({
		target: `${PACKAGE_ID}::board::unlock_name`,
		arguments: [
			txb.pure(ADMIN.toString()),
			txb.pure(IDENTITY.commitment.toString()),
			coin,
		],
	});

	try {
		const res = await setWallet.signAndExecuteTransactionBlock({
			transactionBlock: txb,
			options: {
				showInput: true,
				showEffects: true,
				showEvents: true,
				showObjectChanges: true,
			},
		});
		console.log("'unlock_name' transaction result: ", res);
		return res;
	} catch (e) {
		console.error("'unlock_name' transaction failed", e);
	}
};

export default WalletButton;
