import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {loadCampaigns} from '../model/campaigns/campaignsReq';
import {Campaigns, TCampaign} from '../containers/Campaigns/Campaigns';
import {t} from '../../services/i18n';

type TState = {
  loading: boolean;
  campaigns: TCampaign[];
};

export class CampaignsView extends React.PureComponent<{}, TState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      campaigns: [],
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    loadCampaigns()
      .then(campaigns => this.setState({campaigns}))
      .finally(() => this.setState({loading: false}));
  }

  renderLoading() {
    if (this.state.loading) {
      return (
        <p>
          {t('loading')}
        </p>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <p>
          <FontAwesomeIcon icon={faGlobe}/>
          &nbsp;
          Campaigns View
        </p>
        {this.renderLoading()}
        <Campaigns
          items={this.state.campaigns}
        />
      </>
    );
  }
}
