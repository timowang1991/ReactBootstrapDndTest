var React = require('react');
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import InputGroup from 'react-bootstrap/lib/InputGroup';

var EditTopicMeta = React.createClass({
    render: function() {
        return(
            <div className="container">
                <h3 className="page-header">標題/主視覺</h3>
                <Form>
                    <FormGroup>
                        <ControlLabel>Page URL</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>{'https://tw.news.yahoo.com/'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Space ID</ControlLabel>
                        <FormControl type="text" placeholder="Enter Space ID" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>專題大標題</ControlLabel>
                        <FormControl type="text" placeholder="Enter title" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
});

module.exports = EditTopicMeta;
