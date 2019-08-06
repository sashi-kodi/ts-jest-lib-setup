import * as React from 'react';
import './Button.css';

export interface Props {
    /**
     * Message to append to component
     */
    label?: string;
}

export interface State { }

export default class Button extends React.Component<Props, State> {

    public static defaultProps: Props = {
        label: 'Hello World'
    };

    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <button className="btn">{this.props.label}</button>
        );
    }
}