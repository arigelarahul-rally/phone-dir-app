import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

describe('rendering the parent component',()=>{

    it('here matching Snapshot to check any changes made',()=>{
        const tree = render(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});