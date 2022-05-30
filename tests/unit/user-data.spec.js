import { userData } from "@/store/userData";

// this is the mock commit for the action that goes in the vuex store module
let mockCommit = jest.fn()

// this is the axios.post mock function 
let mockPost = jest.fn()

jest.mock('axios', () => {
  return {
    post: (url, data) => {
      mockPost(url, data)

      return Promise.resolve({
        data: data.username
      })
    }
  }
})

describe('userData vuex module', () => {
  
  beforeEach(() => {
    userData.state = {
      user: undefined,
      testProp: '',
    }
  })
  test('initial state gets returned correctly', () => {

    expect(userData.state).toEqual({
      user: undefined,
      testProp: '',
    })
  })

  test('updateUSer mutation works correctly', () => {

    const testUser = 'testUser'
    userData.mutations.updateUser(userData.state, testUser)

    expect(userData.state.user).toEqual(testUser)
  })

  test('login action works correctly', async () => {

    const testLoginCredentials = {
      username: 'testUser',
      password: 'testPassword'
    }
    await userData.actions.login({ commit: mockCommit }, testLoginCredentials)

    expect(mockCommit).toBeCalledWith('updateUser', testLoginCredentials.username)
  })

  test('getUser getter works correctly', () => {

    const testUser = 'testUser'
    userData.state.user = testUser

    expect(userData.getters.getUser(userData.state)).toEqual(testUser)
  })
})