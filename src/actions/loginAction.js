export const TEST_LOGIN = 'TEST_LOGIN';

export const login = (currentStatus = false) => {
  console.log(currentStatus)
  return {
    type: TEST_LOGIN,
    payload: { isLogged: !currentStatus }
  }
}