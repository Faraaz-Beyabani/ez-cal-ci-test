import React from 'react';
import ReactDOM from 'react-dom';
import LinkGenerator from './LinkGenerator'

it('successful render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkGenerator link="dummy.com" />, div);
    ReactDOM.unmountComponentAtNode(div);
})