import * as signalR from '@microsoft/signalr';
import { Dispatch, AnyAction } from 'redux';
import localization from '../model/resources/localization';
import runActionCreators from '../state/run/runActionCreators';
import actionCreators from '../state/actionCreators';
import Message from '../model/Message';
import messageProcessor from '../state/game/messageProcessor';

export const activeConnections: string[] = [];

export function attachListeners(connection: signalR.HubConnection, dispatch: Dispatch<AnyAction>) {
	connection.on('Joined', (login: string) => dispatch(actionCreators.userJoined(login)));
	connection.on('Leaved', (login: string) => dispatch(actionCreators.userLeaved(login)));
	connection.on('Say', (name: string, text: string) => dispatch(actionCreators.receiveMessage(name, text)));
	connection.on('GameCreated', (game: any) => dispatch(actionCreators.gameCreated(game)));
	connection.on('GameChanged', (game: any) => dispatch(actionCreators.gameChanged(game)));
	connection.on('GameDeleted', (id: number) => dispatch(actionCreators.gameDeleted(id)));

	connection.on('Receive', (message: Message) => messageProcessor(dispatch, message));
	connection.on('Disconnect', () => {
		alert(localization.youAreKicked);
		dispatch((runActionCreators.exitGame() as object) as AnyAction);
	});

	connection.onreconnecting((e) => {
		if (!connection.connectionId || !activeConnections.includes(connection.connectionId)) {
			return;
		}

		const errorMessage = e ? ` (${e.message})` : '';
		dispatch(actionCreators.onConnectionChanged(false, `${localization.connectionReconnecting}${errorMessage}`) as object as AnyAction);
	});

	connection.onreconnected(() => {
		if (!connection.connectionId || !activeConnections.includes(connection.connectionId)) {
			return;
		}

		dispatch(actionCreators.onConnectionChanged(true, localization.connectionReconnected) as object as AnyAction);
	});

	connection.onclose((e) => {
		if (!connection.connectionId || !activeConnections.includes(connection.connectionId)) {
			return;
		}

		dispatch(actionCreators.onConnectionChanged(false, `${localization.connectionClosed} ${e?.message || ''}`) as object as AnyAction);
	});
}

export function detachListeners(connection: signalR.HubConnection) {
	connection.off('Joined');
	connection.off('Leaved');
	connection.off('Say');
	connection.off('GameCreated');
	connection.off('GameChanged');
	connection.off('GameDeleted');
	connection.off('Receive');
	connection.off('Disconnect');

	connection.onreconnecting((e) => { });
	connection.onreconnected(() => { });
	connection.onclose((e) => { });
}

export async function sendMessageToServer(connection: signalR.HubConnection | null, message: string) {
	if (!connection) {
		return;
	}

	await connection.invoke('SendMessage', {
		Text: message,
		IsSystem: true,
		Receiver: '@'
	});
}

export async function say(connection: signalR.HubConnection | null, message: string) {
	if (!connection) {
		return;
	}

	await connection.invoke('SendMessage', {
		Text: message,
		IsSystem: false,
		Receiver: '*'
	});
}

export async function msg(connection: signalR.HubConnection | null, ...args: any[]) {
	if (!connection) {
		return;
	}

	await sendMessageToServer(connection, args.join('\n'));
}
