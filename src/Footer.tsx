import * as React from 'react';

interface IProps {
  name?: string;
}

const Footer: React.SFC<IProps> = (props: IProps) => (
  <div className="footer">
    <h5>Made for Silvi from Tini with L♥ve.</h5>
  </div>
);

Footer.defaultProps = {
  name: 'world',
};

export default Footer;