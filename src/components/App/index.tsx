import * as React from 'react';
import { AppRootProps } from '@velaux/data';
import './index.less';

interface State {}
export class App extends React.PureComponent<AppRootProps, State> {
  constructor(props: AppRootProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div className="page-container">Hello VelaUX</div>;
  }
}
