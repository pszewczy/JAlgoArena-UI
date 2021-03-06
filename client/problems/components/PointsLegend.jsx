// @flow

import React from 'react';
import {Modal, Table} from 'react-bootstrap';

const logoStyle = {
    height: 50,
    marginBottom: 15
};

const modalBodyStyle = {
    height: 150
};

const PointsLegend = ({show, onHide}: {show: boolean, onHide: () => void}) => (
    <Modal show={show || false} onHide={onHide}>
        <Modal.Header closeButton>
            <h2>{"Score Points"}</h2>
        </Modal.Header>
        <Modal.Body style={modalBodyStyle}>
            <Table condensed hover responsive>
                <thead>
                <tr>
                    <th>Level</th>
                    <th>Max Score</th>
                    <th>Max Score (Kotlin)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Easy</td>
                    <td>10</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>30</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>Hard</td>
                    <td>50</td>
                    <td>75</td>
                </tr>
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
            <div className="col-md-offset-4 col-md-4">
                <img src="../img/logo.png" className="img-responsive" style={logoStyle} />
            </div>
        </Modal.Footer>
    </Modal>
);

export default PointsLegend;