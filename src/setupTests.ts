// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	GeolocateControl: jest.fn(),
	Map: jest.fn(() => ({
		addControl: jest.fn(),
		on: jest.fn(),
		remove: jest.fn(),
	})),
	Marker: jest.fn(() => ({
		setLngLat: jest.fn(() => ({
			addTo: jest.fn()
		})),
		
	})),
	NavigationControl: jest.fn()
}));

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	}))
});

// export default undefined;