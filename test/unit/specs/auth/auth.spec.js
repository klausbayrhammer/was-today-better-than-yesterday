import {signInCallback, getCurrentUser} from '@/auth/auth'

let mockOnAuthStateChanged
jest.mock('firebase', () => ({
  auth: () => ({
    onAuthStateChanged: cb => {
      mockOnAuthStateChanged = cb
    }
  })
})
)

describe('auth', () => {
  it('signinCallback is invoked correctly', done => {
    signInCallback(signedIn => {
      expect(signedIn).toBeTruthy()
      done()
    })
    mockOnAuthStateChanged({email: 'x@x.x'})
  })
  it('get active user returns current user', () => {
    const user = {uid: 'uid'}
    mockOnAuthStateChanged(user)
    expect(getCurrentUser()).toEqual('uid')
  })
})
