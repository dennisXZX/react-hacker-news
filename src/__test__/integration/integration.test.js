import moxios from 'moxios'
import { storeFactory } from '../../utils/testUtils'
import {
  handleSearchBlur,
  handleHotSearchMouseEnter,
  getHotSearchList
} from '../../common/header/headerActions'
import { mockInitialState } from '../../utils/testUtils'

describe('Header action dispatcher', () => {
  let store

  beforeEach(() => {
    store = storeFactory(mockInitialState)
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('should update state correctly for handleSearchBlur', () => {
    store.dispatch(handleSearchBlur())

    const expectedState = {
      ...mockInitialState.header,
      isFocused: false
    }

    const newState = store.getState().header

    expect(newState).toEqual(expectedState)
  })

  test('should update state correctly for handleHotSearchMouseEnter', () => {
    store.dispatch(handleHotSearchMouseEnter())

    const expectedState = {
      ...mockInitialState.header,
      isHotSearchMouseIn: true
    }

    const newState = store.getState().header

    expect(newState).toEqual(expectedState)
  })

  test('should update state correctly for getHotSearchList', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: ['hello', 'world']
      })
    })

    store.dispatch(getHotSearchList()).then(() => {
      const newState = store.getState().header
      expect(newState.hotSearchList.length).toBe(2)
      expect(newState.totalPage).toBe(1)
    })
  })
})
