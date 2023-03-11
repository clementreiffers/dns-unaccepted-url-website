import React from 'react';
import * as R from 'ramda';

const getParams = R.pipe(
	R.split('/'),
	R.last,
	R.split('?'),
	R.last,
	R.split('&'),
	R.map(R.split('=')),
	R.fromPairs,
);

function App() {
	const {url, attack} = getParams(window.location.href);
	return <div>
		<h1>The DNS server blocked this webiste because it could attack you</h1>
		<p>it contains {attack} type</p>
		<p>blocked url: {url}</p>
	</div>;
}

export default App;
