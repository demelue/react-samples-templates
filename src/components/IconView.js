import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Icon from './Icon';
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap';

const IconView = props => {

  return (
    <div align="center">
      <Grid>
        <Row >
          <Icon iconName="home" />
          <Icon iconName="help" />
        </Row>
      </Grid>
    </div>
    );
}

export default IconView;
