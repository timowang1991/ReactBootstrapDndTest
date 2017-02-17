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
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

var EditTopicModuleSettings = React.createClass({
    render: function() {
        return(
            <div className="container">
                <h3 className="page-header">模組設定</h3>
                <h4 className="">Column 1</h4>
                <Row>
                    <Col md={6}>
                        <Panel header="相關文章">
                            <Form inline>
                                <FormGroup>
                                    <ControlLabel>相關文章標題</ControlLabel>
                                    <FormControl type="text" placeholder="Enter title" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>List ID</ControlLabel>
                                    <FormControl type="text" placeholder="Enter List ID" />
                                </FormGroup>
                            </Form>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel header="相關文章">
                            <Form inline>
                                <FormGroup>
                                    <ControlLabel>相關文章標題</ControlLabel>
                                    <FormControl type="text" placeholder="Enter title" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>List ID</ControlLabel>
                                    <FormControl type="text" placeholder="Enter List ID" />
                                </FormGroup>
                            </Form>
                        </Panel>
                    </Col>
                </Row>
                <h4 className="">Column 2</h4>
                <Panel header="相關文章">
                    <Form inline>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>相關文章標題</ControlLabel>
                                <FormControl type="text" placeholder="Enter title" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>List ID</ControlLabel>
                                <FormControl type="text" placeholder="Enter List ID" />
                            </FormGroup>
                        </Col>
                    </Form>
                </Panel>
                <Panel header="">
                    <Form inline>
                        <Col md={4}>
                            相關文章
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>相關文章標題</ControlLabel>
                                <FormControl type="text" placeholder="Enter title" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>List ID</ControlLabel>
                                <FormControl type="text" placeholder="Enter List ID" />
                            </FormGroup>
                        </Col>
                    </Form>
                </Panel>
                <Panel header="">
                    <Form>
                        <Col md={2}>
                            相關文章
                        </Col>
                        <Col md={5}>
                            <FormControl type="text" placeholder="相關文章標題" />
                        </Col>
                        <Col md={5}>
                            <FormControl type="text" placeholder="List ID" />
                        </Col>
                    </Form>
                </Panel>
                <Panel header="">
                    <Form>
                        <Col md={2}>
                            <Checkbox inline />
                            <ControlLabel>相關文章</ControlLabel>
                        </Col>
                        <Col md={5}>
                            <FormControl type="text" placeholder="相關文章標題" />
                        </Col>
                        <Col md={5}>
                            <FormControl type="text" placeholder="List ID" />
                        </Col>
                    </Form>
                </Panel>
                <Panel header="" bsStyle="primary">
                    <Form>
                        <Col md={2}>
                            <Checkbox inline />
                            <ControlLabel>相關文章</ControlLabel>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <ControlLabel>相關文章標題</ControlLabel>
                                <FormControl type="text" placeholder="Enter title" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <ControlLabel>List ID</ControlLabel>
                                <FormControl type="text" placeholder="Enter List ID" />
                            </FormGroup>
                        </Col>
                    </Form>
                </Panel>
                <Panel header="相關文章">
                    <Form>
                        <Col md={2}>
                            <ControlLabel>相關文章標題</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl type="text" placeholder="Enter title" />
                        </Col>
                        <Col md={2}>
                            <ControlLabel>List ID</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl type="text" placeholder="Enter List ID" />
                        </Col>
                    </Form>
                </Panel>
                <Panel header="">
                    <Form>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Poll標題</ControlLabel>
                                <FormControl type="text" placeholder="Enter title" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Poll ID</ControlLabel>
                                <FormControl type="text" placeholder="Enter List ID" />
                            </FormGroup>
                        </Col>
                    </Form>
                </Panel>
                <Panel header="">
                    <Form inline>
                        <FormGroup>
                            <ControlLabel>Poll標題</ControlLabel>
                            <FormControl bsClass="col-md-6" type="text" placeholder="Enter title" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Poll ID" />
                        </FormGroup>
                    </Form>
                </Panel>
                <Form>
                    <FormGroup>
                        <ControlLabel>Page URL</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>{'https://tw.news.yahoo.com/'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <ControlLabel>Poll URL</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>{'Poll Title'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <InputGroup.Addon>{'Poll id'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Page URL</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <input type="checkbox" />
                            </InputGroup.Addon>
                            <InputGroup.Addon>{'Poll Title'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <InputGroup.Addon>{'Poll id'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Page URL</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <input type="checkbox" />
                            </InputGroup.Addon>
                            <InputGroup.Addon>{'Poll Title'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>{'Poll Title'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <InputGroup.Addon>{'Poll id'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <input type="checkbox" />
                            </InputGroup.Addon>
                            <InputGroup.Addon>{'Poll Title'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <InputGroup.Addon>{'Poll id'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <input type="checkbox" />
                            </InputGroup.Addon>
                            <InputGroup.Addon>{'Poll Title'}</InputGroup.Addon>
                            <FormControl type="text" placeholder="Enter route" />
                            <FormControl type="text" placeholder="Enter route" />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        );
    }
});

module.exports = EditTopicModuleSettings;
