import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// import { sanitiseAddresses, sanitiseUsers, setAddresses } from './actions';
// import { SET_ADDRESSES } from './constants';
// import { IAddress, ISanitisedAddress, ISanitisedUser } from '../interfaces/interfaces';

// const middlewares = [thunk]
// const mockStore = configureStore(middlewares)

// it('should dispatch action', () => {

// 	// Initialize mockstore with empty state
// 	const initialState = {}
// 	const store = mockStore(initialState)
  
// 	// Dispatch the action
// 	store.dispatch(setAddresses([]));
  
// 	// Test if your store dispatched the expected actions
// 	const actions = store.getActions()
// 	const expectedPayload = { type: SET_ADDRESSES, payload: []}
// 	expect(actions).toEqual([expectedPayload])
// })

// it('should sanitise addresses correctly', () => {
// 	const expectedOutput: ISanitisedAddress[] = [
// 		{
// 			id: 262,
// 			quarantineAddress: "319b Hamilton Road, Coogee Western Australia 6166, Australia",
// 			quarantineAddressLat: -32.116057,
// 			quarantineAddressLong: 115.774657
// 		}
// 	]
// 	const testInput: IAddress[] = [
// 		{
// 			"id": 262,
// 			"quarantine_address": "319b Hamilton Road, Coogee Western Australia 6166, Australia",
// 			"quarantine_address_lat": -32.116057,
// 			"quarantine_address_long": 115.774657
// 		}
// 	]
// 	expect(sanitiseAddresses(testInput)).toEqual(expectedOutput);
// })

// it('should sanitise users correctly', () => {
// 	const expectedOutput: ISanitisedUser[] = [
// 		{
// 			date: "17/10/20",
// 			arrivedTravellers: 10830,
// 			totalUsersProvidedConsent: 3934,
// 			travellersArrivedAndProvidedConsent: 2527,
// 			travellersArrivedAndCompletedSetup: 2342
// 		}
// 	]
// 	const testInput: any[] = [
// 		{
// 			"Date": "17/10/20",
// 			"Arrived travellers": "10830",
// 			"Total users provided consent": "3934",
// 			"Travellers arrived and provided consent": "2527",
// 			"Travellers arrived and completed setup": "2342"
// 		}
// 	]
// 	expect(sanitiseUsers(testInput)).toEqual(expectedOutput);
// })


// @TODO test setAddresses
// @TODO test setUsers
