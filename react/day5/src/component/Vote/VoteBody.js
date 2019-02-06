import React from 'react';
import PropTypes from 'prop-types';

export default class VoteBody extends React.Component {
    constructor(props) {
        super(props);

        //=>INIT STATE
        let {n, m} = this.props.store.getState().vote;
        this.state = {n, m};
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            let {n, m} = this.props.store.getState().vote;
            this.setState({n, m});
        });
    }

    render() {
        let {n, m} = this.state,
            rate = (n / (n + m)) * 100;
        isNaN(rate) ? rate = 0 : null;

        return <div className={'panel-body'}>
            支持人数：<span>{n}</span>
            <br/>
            反对人数：<span>{m}</span>
            <br/>
            支持比率：<span>{rate.toFixed(2) + '%'}</span>
        </div>;
    }
}