import * as React from 'react';
import './Button.css';
export interface Props {
    /**
     * Message to append to component
     */
    label?: string;
}
export interface State {
}
export default class Button extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    render(): JSX.Element;
}
