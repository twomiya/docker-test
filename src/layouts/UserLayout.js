import React,{Component} from 'react';
class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>UserLayout</h2>
                 {this.props.children}
            </div>
        );
    }
}


export default UserLayout;
