import React, {Component} from 'react';

class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>BasicLayout</h2>
                {this.props.children}
            </div>
        );
    }
}

export default BasicLayout;
