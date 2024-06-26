import { logger } from '../../../utils/logger';
import { SocketService } from '../../../SocketService';
import { CommunicationLayerMessage } from '../../../types/CommunicationLayerMessage';
import { EventType } from '../../../types/EventType';

/**
 * Handles the sending of key handshake messages.
 * If the message type starts with 'key_handshake', the function sends the message without encryption.
 *
 * @param instance The current instance of the SocketService.
 * @param message The message to be sent.
 * @returns {boolean} Returns true if the message was a key handshake message, otherwise false.
 */
export function handleKeyHandshake(
  instance: SocketService,
  message: CommunicationLayerMessage,
) {
  logger.SocketService(
    `[SocketService: handleKeyHandshake()] context=${instance.state.context}`,
    message,
  );

  instance.state.socket?.emit(EventType.MESSAGE, {
    id: instance.state.channelId,
    context: instance.state.context,
    clientType: instance.state.isOriginator ? 'dapp' : 'wallet',
    message,
  });
}
