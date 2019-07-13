import phx from 'phoenix'
const { Socket } = phx

// user id should be set by whom?

const socket = null
let channel = null

async function connectToGameServer (sessionId) {
  socket = new Socket('/socket', { params: { sessionId: getSessionId() } })
  await socket
    .connect()
    .onOpen(res => {
      return {
        success: true,
        message: 'successfully connected to the game server'
      }
    })
    .onError(ers => {
      return {
        success: false,
        message: 'unable to join the game server'
      }
    })
}

async function connectToGame (gameId, sessionId) {
  channel = await socket.channel(`game:${gameId}`, { sessionId })
  res = await channel.join()
  res
    .receive('ok', resp => {
      return {
        success: true,
        message: `successfully connected to the game server`
      }
    })
    .receive('error', resp => {
      return {
        success: false,
        message: `unable to join the game server`
      }
    })
}

const getSessionId = () => {
  return 'implement later'
}
