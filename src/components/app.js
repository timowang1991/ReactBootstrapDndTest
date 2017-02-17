import React, {Component} from 'react';
var EditTopicMeta = require('./EditTopicMeta.jsx');
var EditTopicModuleSettings = require('./EditTopicModuleSettings.jsx');

export default class App extends Component {
    render() {
        return (
            <div className="">
                <h2>新增Topic</h2>
                <EditTopicMeta />
                <EditTopicModuleSettings />
            </div>
        );
    }
}
